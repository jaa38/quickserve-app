import React from "react";
import { View } from "react-native";
import AppText from "../../components/AppText";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { spacing, theme } from '../../themes';
import { StepIndicator } from '../../components/StepIndicator';
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";

const CreatePin = () => {
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
            <AppText variant='body-lg-bold'>Create Pin</AppText>

            <AppText variant='body-md' color='secondary'>
              Step 3 of 4
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
        <StepIndicator totalSteps={3} currentStep={3} />

        {/* Title Section */}
        <View style={{ marginTop: spacing['2xl'] }}>
         
        </View>

        {/* Continue Button */}
  
        <Button size='lg' title='Continue' style={{marginTop: spacing['3xl']}} />
      </View>
    </SafeAreaView> 
  );
};

export default CreatePin;