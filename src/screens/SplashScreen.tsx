// src/screens/SplashScreen.tsx

import React, { useEffect, useRef } from 'react';
import { View, Animated, ActivityIndicator, Image } from 'react-native';

import AppText from '../components/AppText';
import { theme } from '../themes';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

// --------------------------------------
// Navigation Type
// --------------------------------------

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

// --------------------------------------
// Component
// --------------------------------------

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  // Animation values
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    // Animate logo
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate after delay
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 1800);

    return () => clearTimeout(timer);
  }, [navigation, opacity, scale]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.brand.primary, // 🔥 strong branded splash
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: theme.layout.screen.paddingHorizontal,
      }}
    >
      {/* Animated Content */}
      <Animated.View
        style={{
          opacity,
          transform: [{ scale }],
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            width: 140,
            height: 140,
            resizeMode: 'contain',
            borderRadius: theme.radius.lg,
          }}
        />

        {/* Title */}
        <AppText
          variant='heading-xl'
          style={{
            color: theme.text.inverse,
            textAlign: 'center',
            marginTop: theme.spacing.lg,
          }}
        >
          QuickServe
        </AppText>

        {/* Subtitle */}
        <AppText
          variant='body-md'
          style={{
            color: theme.text.inverse,
            opacity: 0.8,
            textAlign: 'center',
            marginTop: theme.spacing.sm,
          }}
        >
          Fast. Simple. Reliable.
        </AppText>
      </Animated.View>

      {/* Loader */}
      <ActivityIndicator
        size='small'
        color={theme.text.inverse}
        style={{
          marginTop: theme.spacing.xl,
        }}
      />
    </View>
  );
};

export default SplashScreen;
