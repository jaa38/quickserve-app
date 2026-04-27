import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AppText from "../../components/AppText";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { spacing, theme } from "../../themes";
import { StepIndicator } from "../../components/StepIndicator";
import { Divider } from "../../components/Divider";
import { OTPInput } from "../../components/OTPInput";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";

import { useRoute, RouteProp } from "@react-navigation/native";

import { saveToken } from "../../services/auth";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Biometrics"
>;

type RoutePropType = RouteProp<RootStackParamList, "ConfirmPin">;

const ConfirmPin = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();

  const originalPin = route.params.pin;

  const [code, setCode] = useState("");

  const isComplete = code.length === 4;
  const isError = isComplete && code !== originalPin;

  useEffect(() => {
    if (isComplete && !isError) {
      const handleSuccess = async () => {
        const fakeToken = "jwt_token_123456";

        await saveToken(fakeToken); // 🔥 SAVE TOKEN HERE

        navigation.replace("Biometrics");
      };

      handleSuccess();
    }
  }, [code]);

  useEffect(() => {
    if (isError) {
      setTimeout(() => setCode(""), 500);
    }
  }, [isError]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background.primary,
      }}
    >
      {/* ================= HEADER ================= */}
      <View
        style={{
          paddingHorizontal: theme.layout.screen.paddingHorizontal,
          paddingTop: theme.spacing["3xl"],
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={theme.text.primary}
          />

          <View style={{ marginLeft: spacing.xs }}>
            <AppText variant="body-lg-bold">Confirm Pin</AppText>

            <AppText variant="body-md" color="secondary">
              Step 3 of 4
            </AppText>
          </View>
        </View>
      </View>

      {/* ================= DIVIDER ================= */}
      <Divider fullWidth />

      {/* ================= CONTENT ================= */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: theme.layout.screen.paddingHorizontal,
        }}
      >
        <StepIndicator totalSteps={3} currentStep={3} />

        {/* Title Section */}
        <View style={{ marginTop: spacing["2xl"] }}>
          <AppText variant="heading-md">Re-entert your PIN</AppText>

          <AppText
            variant="body-md"
            color="secondary"
            style={{ marginTop: spacing.md }}
          >
            Just to make sure we got right
          </AppText>

          <View style={{ alignItems: "center" }}>
            <OTPInput
              length={4}
              value={code}
              onChange={setCode}
              error={isError}
            />
            {isError && (
              <AppText
                variant="body-sm"
                color="error"
                style={{ marginTop: spacing.sm }}
              >
                Incorrect Pin. Try again
              </AppText>
            )}
          </View>

          <View style={{ marginTop: spacing["2xl"], alignItems: "center" }}>
            <AppText variant="helper" color="secondary">
              Your PIN is encrypted and never shard
            </AppText>
          </View>
        </View>

        {/* Continue Button */}
      </View>
    </SafeAreaView>
  );
};

export default ConfirmPin;
