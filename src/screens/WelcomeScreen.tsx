// src/screens/WelcomeScreen.tsx

import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppText from '../components/AppText';
import { theme } from '../themes';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../components/Button';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

// --------------------------------------
// Component
// --------------------------------------

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between', // 🔥 THIS IS THE KEY

        backgroundColor: theme.background.primary,
      }}
    >
      {/* Status Bar */}
      <StatusBar style='dark' />

      <View
        style={{
          flex: 1,
          paddingHorizontal: theme.layout.screen.paddingHorizontal,
          paddingTop: theme.spacing['3xl'],
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: theme.spacing.md,
          }}
        >
          <Image
            source={require('../../assets/images/logo2.png')}
            style={{
              width: 120,
              height: 120,
              resizeMode: 'contain',
            }}
          />

          <AppText variant='heading-lg' style={{ color: theme.text.primary }}>
            QuickServe
          </AppText>
        </View>

        {/* Hero Text */}
        <View style={{ marginTop: theme.spacing['2xl'] }}>
          <AppText variant='heading-lg' style={{ color: theme.text.primary }}>
            Airtime, data and bills {'\n'}{' '}
            <AppText
              variant='heading-lg'
              style={{ color: theme.brand.primary }}
            >
              in under 10 seconds.
            </AppText>
          </AppText>
        </View>

        {/* Description */}
        <View style={{ marginTop: theme.spacing.lg }}>
          <AppText variant='body-lg' style={{ color: theme.text.secondary }}>
            One wallet for everyday payments. Built for speed, designed for
            trust.
          </AppText>
        </View>

        {/* Features */}
        <View
          style={{
            marginTop: theme.spacing['2xl'],
            gap: theme.spacing.xl,
          }}
        >
          {/* Feature Item */}
          <View style={{ flexDirection: 'row', gap: theme.spacing.lg }}>
            <View
              style={{
                padding: theme.spacing.md,
                backgroundColor: theme.background.secondary,
                borderRadius: theme.radius.full,
              }}
            >
              <Ionicons
                name='flash-outline'
                size={24}
                color={theme.brand.primary}
              />
            </View>

            <AppText
              variant='body-lg-bold'
              style={{
                color: theme.text.primary,
                alignSelf: 'center',
              }}
            >
              One-tap repeat purchases
            </AppText>
          </View>

          {/* Feature Item */}
          <View style={{ flexDirection: 'row', gap: theme.spacing.lg }}>
            <View
              style={{
                padding: theme.spacing.md,
                backgroundColor: theme.background.secondary,
                borderRadius: theme.radius.full,
              }}
            >
              <Ionicons
                name='shield-outline'
                size={24}
                color={theme.brand.primary}
              />
            </View>

            <AppText
              variant='body-lg-bold'
              style={{
                color: theme.text.primary,
                alignSelf: 'center',
              }}
            >
              Bank-grade security & PIN
            </AppText>
          </View>

          {/* Feature Item */}
          <View style={{ flexDirection: 'row', gap: theme.spacing.lg }}>
            <View
              style={{
                padding: theme.spacing.md,
                backgroundColor: theme.background.secondary,
                borderRadius: theme.radius.full,
              }}
            >
              <Ionicons
                name='sparkles-outline'
                size={24}
                color={theme.brand.primary}
              />
            </View>

            <AppText
              variant='body-lg-bold'
              style={{
                color: theme.text.primary,
                alignSelf: 'center',
              }}
            >
              Smart suggestions saved for later
            </AppText>
          </View>
        </View>

        <View style={{ marginTop: 'auto' }}>
          <Button
            title='Get Started'
            size='lg'
            onPress={() => navigation.navigate('PhoneNumber')}
          />
          <Pressable onPress={() => navigation.navigate('Login')}>
            <AppText
              variant='link-lg'
              color='muted'
              style={{ alignSelf: 'center', marginTop: theme.spacing['2xl'] }}
            >
              I already have an account
            </AppText>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
