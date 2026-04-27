import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { getToken } from "../services/auth";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";

import PhoneNumber from "../screens/Onboarding/PhoneNumber";
import VerifyCode from "../screens/Onboarding/VerifyCode";
import CreatePin from "../screens/Onboarding/CreatePin";
import ConfirmPin from "../screens/Onboarding/ConfirmPin";
import Biometrics from "../screens/Onboarding/Biometrics";
import BiometricsSignIn from "../screens/BiometricsSignIn";

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;

  PhoneNumber: undefined;
  VerifyCode: undefined;
  CreatePin: undefined;
  ConfirmPin: { pin: string };
  Biometrics: undefined;
  BiometricsSignIn: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] =
    useState<keyof RootStackParamList>("Login");

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getToken();

      if (token) {
        setInitialRoute("Home");
      } else {
        setInitialRoute("Login");
      }

      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="VerifyCode" component={VerifyCode} />
      <Stack.Screen name="CreatePin" component={CreatePin} />
      <Stack.Screen name="ConfirmPin" component={ConfirmPin} />
      <Stack.Screen name="Biometrics" component={Biometrics} />
      <Stack.Screen name="BiometricsSignIn" component={BiometricsSignIn} />
    </Stack.Navigator>
  );
};

export default AppNavigator;