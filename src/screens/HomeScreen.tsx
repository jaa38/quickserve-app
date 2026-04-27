import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppText from "../components/AppText";
import { Button } from "../components/Button";
import { theme, spacing } from "../themes";

import { removeToken } from "../services/auth";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

import ProtectedRoute from "../navigation/ProtectedRoute";

// -----------------------------
// Navigation Type
// -----------------------------
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  // -----------------------------
  // Logout Function
  // -----------------------------
  const handleLogout = async () => {
    await removeToken();

    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <ProtectedRoute>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.background.primary,
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: theme.layout.screen.paddingHorizontal,
            paddingTop: spacing["3xl"],
          }}
        >
          {/* HEADER */}
          <AppText variant="heading-lg">Welcome 👋</AppText>

          <AppText
            variant="body-md"
            color="secondary"
            style={{ marginTop: spacing.sm }}
          >
            You are now logged in
          </AppText>

          {/* LOGOUT BUTTON */}
          <Button
            title="Logout"
            onPress={handleLogout}
            style={{ marginTop: spacing["3xl"] }}
          />
        </View>
      </SafeAreaView>
    </ProtectedRoute>
  );
};

export default HomeScreen;