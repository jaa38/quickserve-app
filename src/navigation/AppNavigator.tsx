import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import PhoneNumber from "../screens/Onboarding/PhoneNumber";

import VerifyCode from "../screens/Onboarding/VerifyCode";
import CreatePin from "../screens/Onboarding/CreatePin";
import ConfirmPin from "../screens/Onboarding/ConfirmPin";
import Biometrics from "../screens/Onboarding/Biometrics";

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Home: undefined;
  Login: undefined;

  PhoneNumber: undefined;
  VerifyCode: undefined;
  CreatePin: undefined;
  ConfirmPin: { pin: string };
  Biometrics: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="VerifyCode" component={VerifyCode} />
      <Stack.Screen name="CreatePin" component={CreatePin} />
      <Stack.Screen name="ConfirmPin" component={ConfirmPin} />
      <Stack.Screen name="Biometrics" component={Biometrics} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
