import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AppText from "../../components/AppText";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { spacing, theme } from "../../themes";
import { Divider } from "../../components/Divider";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "VerifyCode"
>;

const Biometrics = () => {
  const navigation = useNavigation<NavigationProp>();

  const [code, setCode] = useState("");
  const correctCode = "1234"; // simulate backend
  const isComplete = code.length === 4;
  const isError = isComplete && code !== correctCode;

  const [isVerifying, setIsVerifying] = useState(false);
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
            <AppText variant="body-lg-bold">Biometrics</AppText>

            <AppText variant="body-md" color="secondary">
              Step 4 of 4
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
        {/* Title Section */}
        <View style={{ marginTop: spacing["2xl"] }}></View>
      </View>
    </SafeAreaView>
  );
};

export default Biometrics;
