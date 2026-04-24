// src/theme/layout.ts

import { spacing } from './spacing';

export const layout = {
  screen: {
    paddingHorizontal: spacing['2xl'],
    paddingBottom: spacing['3xl'],
  },

  section: {
    marginTop: spacing.xl,
    gap: spacing.lg,
  },

  row: {
    gap: spacing.md,
  },
} as const;

export type AppLayout = typeof layout;