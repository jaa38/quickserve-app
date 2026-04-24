// src/components/Button.tsx

import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { theme, typography } from '../themes';

// --------------------------------------
// Types
// --------------------------------------

type Variant = 'primary' | 'secondary' | 'success' | 'disabled';
type Size = 'lg' | 'md' | 'sm';

interface Props {
  title: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

// --------------------------------------
// Size Config
// --------------------------------------

const sizeStyles = {
  lg: {
    height: 56,
    text: typography['button-lg'],
  },
  md: {
    height: 48,
    text: typography['button-md'],
  },
  sm: {
    height: 40,
    text: typography['button-sm'],
  },
};

// --------------------------------------
// Component
// --------------------------------------

export const Button: React.FC<Props> = ({
  title,
  variant = 'primary',
  size = 'md',
  fullWidth = true,
  onPress,
  style,
}) => {
  const buttonVariant = theme.buttons[variant];
  const sizeConfig = sizeStyles[size];

  return (
    <Pressable
      onPress={variant === 'disabled' ? undefined : onPress}
      style={({ pressed }) => [
        styles.base,
        {
          height: sizeConfig.height,
          backgroundColor:
            pressed && buttonVariant.pressed
              ? buttonVariant.pressed
              : buttonVariant.background,

          borderColor: buttonVariant.border,
          borderWidth: buttonVariant.border ? 1 : 0,

          width: fullWidth ? '100%' : undefined,
        },
        style,
      ]}
    >
      <Text
        style={[
          sizeConfig.text,
          {
            color: buttonVariant.text,
          },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

// --------------------------------------
// Styles
// --------------------------------------

const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: theme.spacing['2xl'], // 24
    paddingVertical: theme.spacing.lg, // 16

    borderRadius: theme.radius.lg,
  },
});
