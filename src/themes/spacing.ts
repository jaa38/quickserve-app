// src/theme/spacing.ts

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
} as const;

// --------------------------------------
// Types
// --------------------------------------

export type Spacing = typeof spacing;
export type SpacingKey = keyof typeof spacing;
export type SpacingValue = Spacing[SpacingKey];