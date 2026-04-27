import React, { useEffect, useRef, useState } from "react";
import { Animated, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../../components/AppText";
import { Divider } from "../../components/Divider";
import { spacing, theme } from "../../themes";
import { FeatureCard } from "../../components/FeatureCard";
import { Button } from "../../components/Button";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";

import {
  authenticate,
  checkBiometricsSupport,
} from "../../services/biometrics";
import { enableBiometrics } from "../../services/storage";
import { saveToken } from "../../services/auth"

// ✅ FIXED TYPE
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Biometrics"
>;

const Biometrics = () => {
  const navigation = useNavigation<NavigationProp>();

  const [supported, setSupported] = useState(false);
  const [loading, setLoading] = useState(false);

  const scale = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    let isMounted = true;

    checkBiometricsSupport().then((res) => {
      if (isMounted) setSupported(res);
    });

    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      friction: 6,
    }).start();

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
      ]),
    );

    pulseAnimation.start();

    return () => {
      isMounted = false;
      pulseAnimation.stop();
    };
  }, []);

  // 🔐 ENABLE BIOMETRICS + SAVE TOKEN
  const handleEnableBiometrics = async () => {
    if (!supported) {
      Alert.alert("Not available", "Biometrics not supported on this device");
      return;
    }

    try {
      setLoading(true);

      const success = await authenticate();

      if (success) {
        await enableBiometrics();

        const fakeToken = `jwt_${Date.now()}`;
        await saveToken(fakeToken); // 🔐 Secure storage

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
      style={{
        flex: 1,
        backgroundColor: theme.background.primary,
      }}
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
            onPress={() => navigation.goBack()} // ✅ FIXED
          />

          <View style={{ marginLeft: spacing.xs }}>
            <AppText variant="body-lg-bold">Biometrics</AppText>
            <AppText variant="body-md" color="secondary">
              Step 4 of 4
            </AppText>
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
        <View style={{ marginTop: spacing["2xl"], alignItems: "center" }}>
          {/* ICON */}
          <Animated.View
            style={{
              padding: 36,
              backgroundColor: theme.icons.faceId.background,
              borderRadius: theme.radius.full,
              transform: [{ scale }, { scale: pulse }],

              shadowColor: "#000",
              shadowOffset: { width: 0, height: 6 },
              shadowRadius: 12,
              shadowOpacity: pulse.interpolate({
                inputRange: [1, 1.08],
                outputRange: [0.1, 0.25],
              }),

              elevation: 6,
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
            <AppText variant="heading-md">Sign in faster</AppText>

            <AppText
              variant="body-md"
              color="secondary"
              style={{ marginTop: spacing.md, textAlign: "center" }}
            >
              Use Face ID or fingerprint to unlock QuickServe instantly
            </AppText>
          </View>

          {/* FEATURES */}
          <FeatureCard
            style={{
              marginTop: spacing["2xl"],
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                padding: spacing.md,
                backgroundColor: theme.icons.biometrics.background,
                borderRadius: theme.radius.full,
                marginRight: spacing.lg,
              }}
            >
              <Ionicons
                name="flash-outline"
                size={24}
                color={theme.icons.biometrics.icon}
              />
            </View>

            <View style={{ flex: 1 }}>
              <AppText variant="body-md-bold">Open the app instantly</AppText>
            </View>
          </FeatureCard>

          <FeatureCard
            style={{
              marginTop: spacing["2xl"],
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                padding: spacing.md,
                backgroundColor: theme.icons.biometrics.background,
                borderRadius: theme.radius.full,
                marginRight: spacing.lg,
              }}
            >
              <Ionicons
                name="flash-outline"
                size={24}
                color={theme.icons.biometrics.icon}
              />
            </View>

            <View style={{ flex: 1 }}>
              <AppText variant="body-md-bold">
                Your biometrics never leave this device
              </AppText>
            </View>
          </FeatureCard>

          {/* BUTTON */}
          <Button
            title={loading ? "Enabling..." : "Enable biometrics"}
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
      </View>
    </SafeAreaView>
  );
};

export default Biometrics;
