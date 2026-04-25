// src/components/Divider.tsx

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../themes';

interface Props {
  fullWidth?: boolean;
  marginTop?: keyof typeof theme.spacing;
  marginBottom?: keyof typeof theme.spacing;
  style?: ViewStyle;
}

export const Divider: React.FC<Props> = ({
  fullWidth = true,
  marginTop = 'lg',
  marginBottom = '2xl',
  style,
}) => {
  return (
    <View
      style={[
        styles.base,
        {
          marginTop: theme.spacing[marginTop],
          marginBottom: theme.spacing[marginBottom],

          marginHorizontal: fullWidth
            ? -theme.layout.screen.paddingHorizontal
            : undefined,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    height: 1,
    width: '100%',
    backgroundColor: theme.border.default,
    alignSelf: 'center',
  },
});
