// src/screens/PhoneNumber.tsx

import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import AppText from '../../components/AppText';
import { Divider } from '../../components/Divider';
import { spacing, theme } from '../../themes';
import { StepIndicator } from '../../components/StepIndicator';
import { PhoneInput } from '../../components/PhoneInput';

import { useCountry } from '../../hooks/useCountry';
import { Button } from '../../components/Button';

const PhoneNumber = () => {
  const [phone, setPhone] = useState('');

  const isValid = phone.replace(/\s/g, '').length === 11;

  const [isPickerOpen, setIsPickerOpen] = useState(false);
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
          paddingTop: theme.spacing['3xl'],
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Ionicons
            name='chevron-back-outline'
            size={24}
            color={theme.text.primary}
          />

          <View style={{ marginLeft: spacing.xs }}>
            <AppText variant='body-lg-bold'>Your Number</AppText>

            <AppText variant='body-md' color='secondary'>
              Step 1 of 4
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
        <StepIndicator totalSteps={3} currentStep={1} />

        {/* Title Section */}
        <View style={{ marginTop: spacing['2xl'] }}>
          <AppText variant='heading-md'>Enter your phone number</AppText>

          <AppText
            variant='body-md'
            color='secondary'
            style={{ marginTop: spacing.xs }}
          >
            We'll send a 6-digit code to verify
          </AppText>
        </View>

        {/* Phone Input */}
        <PhoneInput
          value={phone}
          onChange={setPhone}
          error={!isValid && phone ? 'Invalid phone number' : undefined}
          style={{ marginTop: spacing['2xl'] }}
        />

        <View style={{ marginTop: spacing.lg }}>
          <AppText variant='body-sm' color='secondary'>
            By continue you agree to our
            <AppText variant='body-sm' color='link'>
              {' '}
              Terms
            </AppText>{' '}
            and
            <AppText variant='body-sm' color='link'>
              {' '}
              Privacy
            </AppText>
          </AppText>
        </View>

        {/* Continue Button */}
  
        <Button size='lg' title='Continue' style={{marginTop: spacing['3xl']}} />
      </View>
    </SafeAreaView>
  );
};

export default PhoneNumber;
