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


type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ConfirmPin"
>;

const CreatePin = () => {
  const navigation = useNavigation<NavigationProp>();

  const [code, setCode] = useState("");

  const isComplete = code.length === 4;

  useEffect(() => {
    if (isComplete) {
      setTimeout(() => {
        navigation.navigate("ConfirmPin", { pin: code });
      }, 200);
    }
  }, [code]);

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
            <AppText variant="body-lg-bold">Create Pin</AppText>

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
          <AppText variant="heading-md">Set a 4-digit PIN</AppText>

          <AppText
            variant="body-md"
            color="secondary"
            style={{ marginTop: spacing.md }}
          >
            You'll use this to confirm every payment
          </AppText>

          <View style={{ alignItems: "center" }}>
            <OTPInput length={4} value={code} onChange={setCode} />
          </View>

          <View style={{ marginTop: spacing["2xl"], alignItems: "center" }}>
            <AppText variant="helper" color="secondary">
              Your PIN is encrypted and never shard
            </AppText>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default CreatePin;
