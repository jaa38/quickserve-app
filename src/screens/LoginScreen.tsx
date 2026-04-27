import React, { useState } from "react";
import { Pressable, View } from "react-native";
import AppText from "../components/AppText";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Divider } from "../components/Divider";
import { spacing, theme } from "../themes";
import { PhoneInput } from "../components/PhoneInput";
import { Button } from "../components/Button";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [phone, setPhone] = useState("");

  const isValid = phone.replace(/\s/g, "").length === 10;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background.primary }}>
      {/* HEADER */}
      <View
        style={{
          paddingHorizontal: theme.layout.screen.paddingHorizontal,
          paddingTop: theme.spacing["3xl"],
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="chevron-back-outline" size={24} color={theme.text.primary} />

          <View style={{ marginLeft: spacing.xs }}>
            <AppText variant="body-lg-bold">Sign In</AppText>
          </View>
        </View>
      </View>

      <Divider fullWidth />

      {/* CONTENT */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: theme.layout.screen.paddingHorizontal,
        }}
      >
        <AppText variant="heading-md">Enter your phone number</AppText>

        <AppText
          variant="body-md"
          color="secondary"
          style={{ marginTop: spacing.md }}
        >
          Enter the phone number on your account
        </AppText>

        <PhoneInput
          value={phone}
          onChange={setPhone}
          error={!isValid && phone ? "Invalid phone number" : undefined}
          style={{ marginTop: spacing["2xl"] }}
        />

        <View style={{ marginTop: spacing.lg }}>
          <AppText variant="body-sm" color="secondary">
            Your data is encrypted and never shared
          </AppText>
        </View>

        <Button
          size="lg"
          title="Continue"
          disabled={!isValid}
          onPress={() => navigation.navigate("VerifyCode")}
          style={{ marginTop: spacing["3xl"] }}
        />

        {/* 🔥 FIXED */}
        <Pressable onPress={() => navigation.navigate("BiometricsSignIn")}>
          <AppText
            variant="link-lg"
            color="muted"
            style={{ alignSelf: "center", marginTop: spacing["2xl"] }}
          >
            Sign in with biometrics
          </AppText>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;