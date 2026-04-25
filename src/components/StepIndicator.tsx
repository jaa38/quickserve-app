import React from 'react';
import { View } from 'react-native';
import { theme } from '../themes';

type Props = {
  totalSteps: number;
  currentStep: number;
};

export const StepIndicator: React.FC<Props> = ({ totalSteps, currentStep }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: theme.spacing.sm,
        // marginTop: theme.spacing.lg,
      }}
    >
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index < currentStep;

        return (
          <View
            key={index}
            style={{
              flex: 1,
              height: 4,
              borderRadius: theme.radius.full,
              backgroundColor: isActive
                ? theme.brand.primary
                : theme.border.default,
            }}
          />
        );
      })}
    </View>
  );
};
