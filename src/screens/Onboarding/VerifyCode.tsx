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
  "VerifyCode"
>;

const VerifyCode = () => {
  const navigation = useNavigation<NavigationProp>();

  const [code, setCode] = useState("");
  const correctCode = "123456"; // simulate backend
  const isComplete = code.length === 6;
  const isError = isComplete && code !== correctCode;
  const [timer, setTimer] = useState(30);

  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (isComplete && !isError) {
      console.log("Auto verify success");
      // navigation.navigate("CreatePin") later
    }
  }, [code]);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (isError) {
      setTimeout(() => setCode(""), 500);
    }
  }, [isError]);

  useEffect(() => {
    if (isComplete && !isError) {
      setTimeout(() => {
        navigation.navigate("CreatePin");
      }, 500);
    }
  }, [code]);

  useEffect(() => {
    if (isComplete && !isError) {
      setIsVerifying(true);

      setTimeout(() => {
        navigation.navigate("CreatePin");
      });
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
            <AppText variant="body-lg-bold">Verify</AppText>

            <AppText variant="body-md" color="secondary">
              Step 2 of 4
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
        <StepIndicator totalSteps={3} currentStep={2} />

        {/* Title Section */}
        <View style={{ marginTop: spacing["2xl"] }}>
          <AppText variant="heading-md">Enter the 6-digit code</AppText>

          <AppText
            variant="body-md"
            color="secondary"
            style={{ marginTop: spacing.md }}
          >
            Sent to +234 909 *** 1963
          </AppText>

          <View>
            <OTPInput value={code} onChange={setCode} error={isError} />
            {isError && (
              <AppText
                variant="body-sm"
                color="error"
                style={{ marginTop: spacing.sm }}
              >
                Incorrect code. Try again
              </AppText>
            )}
          </View>
        </View>

        <View style={{ marginTop: spacing["2xl"], alignItems: "center" }}>
          {timer > 0 ? (
            <AppText variant="body-sm" color="secondary">
              Resend code in {timer}s
            </AppText>
          ) : (
            <AppText
              variant="body-sm-bold"
              color="link"
              onPress={() => {
                console.log("Resend code");
                setTimer(30);
              }}
            >
              Resend code
            </AppText>
          )}

          <View style={{ marginTop: spacing.lg }}>
            <AppText variant="helper" color="secondary">
              Tip: try <AppText variant="helperBold">123456 </AppText> to
              continue
            </AppText>
          </View>
        </View>

        {/* Continue Button */}
      </View>
    </SafeAreaView>
  );
};

export default VerifyCode;
