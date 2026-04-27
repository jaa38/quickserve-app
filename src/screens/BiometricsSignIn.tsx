import React, { useEffect, useRef, useState } from "react";
import { Animated, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import { Divider } from "../components/Divider";
import { spacing, theme } from "../themes";
import { Button } from "../components/Button";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

import {
  authenticate,
  checkBiometricsSupport,
} from "../services/biometrics";
import { enableBiometrics } from "../services/storage";
import { saveToken } from "../services/auth"; // 🔥 IMPORTANT

// -----------------------------
// Navigation Type
// -----------------------------
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "BiometricsSignIn"
>;

const BiometricsSignIn = () => {
  const navigation = useNavigation<NavigationProp>();

  const [supported, setSupported] = useState(false);
  const [loading, setLoading] = useState(false);

  const scale = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(1)).current;

  // -----------------------------
  // INIT
  // -----------------------------
  useEffect(() => {
    let isMounted = true;

    // Check biometrics support
    checkBiometricsSupport().then((res) => {
      if (isMounted) setSupported(res);
    });

    // Entry animation
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      friction: 6,
    }).start();

    // Pulse animation
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.08,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );

    pulseAnimation.start();

    return () => {
      isMounted = false;
      pulseAnimation.stop();
    };
  }, []);

  // -----------------------------
  // HANDLE BIOMETRICS
  // -----------------------------
  const handleEnableBiometrics = async () => {
    if (!supported) {
      Alert.alert("Not available", "Biometrics not supported");
      return;
    }

    try {
      setLoading(true);

      const success = await authenticate();

      if (success) {
        await enableBiometrics();

        // 🔥 SAVE TOKEN (REMEMBER USER)
        const fakeToken = `jwt_${Date.now()}`;
        await saveToken(fakeToken);

        // 🔥 RESET NAVIGATION (NO BACK)
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      } else {
        Alert.alert("Failed", "Authentication failed");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.background.primary }}
    >
      {/* HEADER */}
      <View
        style={{
          paddingHorizontal: theme.layout.screen.paddingHorizontal,
          paddingTop: theme.spacing["3xl"],
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={theme.text.primary}
            onPress={() => navigation.goBack()}
          />

          <View style={{ marginLeft: spacing.xs }}>
            <AppText variant="body-lg-bold">Sign in</AppText>
          </View>
        </View>
      </View>

      <Divider fullWidth />

      {/* CONTENT */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: theme.layout.screen.paddingHorizontal,
          alignItems: "center",
        }}
      >
        {/* ICON */}
        <Animated.View
          style={{
            marginTop: spacing["2xl"],
            padding: 36,
            backgroundColor: theme.icons.faceId.background,
            borderRadius: theme.radius.full,
            transform: [{ scale }, { scale: pulse }],
          }}
        >
          <Ionicons
            name="finger-print-outline"
            size={64}
            color={theme.icons.faceId.icon}
          />
        </Animated.View>

        {/* TEXT */}
        <View style={{ marginTop: spacing.lg, alignItems: "center" }}>
          <AppText variant="heading-md">
            Tap to sign in with Face ID
          </AppText>

          <AppText
            variant="body-md"
            color="secondary"
            style={{
              marginTop: spacing.md,
              textAlign: "center",
            }}
          >
            Fast, secure, no typing.
          </AppText>
        </View>

        {/* BUTTON */}
        <Button
          title={loading ? "Signing In..." : "Sign In"}
          onPress={handleEnableBiometrics}
          disabled={!supported || loading}
          style={{ marginTop: spacing["3xl"] }}
        />

        {/* SKIP */}
        <AppText
          variant="link-lg"
          color="muted"
          style={{ marginTop: spacing["2xl"] }}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
            })
          }
        >
          Maybe later
        </AppText>
      </View>
    </SafeAreaView>
  );
};

export default BiometricsSignIn;