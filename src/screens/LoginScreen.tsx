import React from 'react';
import { View } from 'react-native';
import AppText from '../components/AppText';

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AppText variant='heading-lg'>Login Screen</AppText>
    </View>
  );
};

export default LoginScreen;
