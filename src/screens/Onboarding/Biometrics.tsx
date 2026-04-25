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
        <View style={{ marginTop: spacing["2xl"] }}>
          <View
            style={{
              padding: 36,
              backgroundColor: theme.icons.faceId.background,
              borderRadius: theme.radius.full,
              alignSelf: "flex-start", // keeps it tight around the icon
            }}
          >
            <Ionicons
              name="finger-print-outline"
              size={64}
              color={theme.icons.faceId.icon}
              aling
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Biometrics;
