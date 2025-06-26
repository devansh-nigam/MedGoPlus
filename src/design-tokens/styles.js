// Healthcare Design System for React Native
// Optimized for senior citizens healthcare platform

import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

// =============================================================================
// COLOR SYSTEM
// =============================================================================

export const Colors = {
  // Primary Colors
  primary: {
    teal: '#319D9B', // Medical Theme Primary
    darkTeal: '#237373', // Doctor's Tie / Shadow
    orange: '#F28C28', // Bright Orange (Saree / Accent)
  },

  // Neutral Colors
  neutral: {
    beige: '#FDF3E7', // Soft Beige (Background)
    lightGray: '#F4F4F4', // Off-white / Light Gray
    darkBrown: '#3D2F2B', // Dark Brown (Outlines)
    white: '#FFFFFF',
    black: '#000000',
  },

  // Semantic Colors
  semantic: {
    success: '#2D6A4F',
    warning: '#F28C28',
    error: '#DC2626',
    info: '#319D9B',
  },

  // Text Colors (Optimized for seniors - high contrast)
  text: {
    primary: '#3D2F2B', // Dark Brown for main text
    secondary: '#237373', // Dark Teal for secondary text
    accent: '#F28C28', // Orange for highlights
    inverse: '#FFFFFF', // White text on dark backgrounds
    muted: '#6B7280', // For less important text
  },

  // Background Colors
  background: {
    primary: '#FFFFFF', // Main background
    secondary: '#FDF3E7', // Soft Beige
    accent: '#F4F4F4', // Light Gray
    overlay: 'rgba(61, 47, 43, 0.5)', // Dark Brown with opacity
  },

  // Border Colors
  border: {
    primary: '#3D2F2B', // Dark Brown
    secondary: '#319D9B', // Teal
    light: '#F4F4F4', // Light Gray
    accent: '#F28C28', // Orange
  },
};

// =============================================================================
// TYPOGRAPHY SYSTEM
// =============================================================================

export const Typography = {
  // Font Families
  fontFamily: {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semiBold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
  },

  // Font Sizes (Larger for seniors)
  fontSize: {
    xs: 14,
    sm: 16,
    base: 18, // Minimum recommended for seniors
    lg: 20,
    xl: 24,
    '2xl': 28,
    '3xl': 32,
    '4xl': 36,
    '5xl': 40,
  },

  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8, // Better for seniors
  },

  // Letter Spacing
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
  },
};

// =============================================================================
// SPACING SYSTEM
// =============================================================================

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
  '4xl': 56,
  '5xl': 64,
  '6xl': 72,
};

// =============================================================================
// BORDER RADIUS SYSTEM
// =============================================================================

export const BorderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  full: 9999,
};

// =============================================================================
// SHADOW SYSTEM
// =============================================================================

export const Shadows = {
  sm: {
    shadowColor: Colors.neutral.darkBrown,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: Colors.neutral.darkBrown,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: Colors.neutral.darkBrown,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  xl: {
    shadowColor: Colors.neutral.darkBrown,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
};

// =============================================================================
// TEXT STYLES
// =============================================================================

export const TextStyles = StyleSheet.create({
  // Headings
  h1: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.fontSize['4xl'],
    lineHeight: Typography.fontSize['4xl'] * Typography.lineHeight.tight,
    color: Colors.text.primary,
    letterSpacing: Typography.letterSpacing.tight,
  },

  h2: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.fontSize['3xl'],
    lineHeight: Typography.fontSize['3xl'] * Typography.lineHeight.tight,
    color: Colors.text.primary,
  },

  h3: {
    fontFamily: Typography.fontFamily.semiBold,
    fontSize: Typography.fontSize['2xl'],
    lineHeight: Typography.fontSize['2xl'] * Typography.lineHeight.normal,
    color: Colors.text.primary,
  },

  h4: {
    fontFamily: Typography.fontFamily.semiBold,
    fontSize: Typography.fontSize.xl,
    lineHeight: Typography.fontSize.xl * Typography.lineHeight.normal,
    color: Colors.text.primary,
  },

  // Body Text
  bodyLarge: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.lg,
    lineHeight: Typography.fontSize.lg * Typography.lineHeight.relaxed,
    color: Colors.text.primary,
  },

  body: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.base,
    lineHeight: Typography.fontSize.base * Typography.lineHeight.relaxed,
    color: Colors.text.primary,
  },

  bodySmall: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.sm,
    lineHeight: Typography.fontSize.sm * Typography.lineHeight.relaxed,
    color: Colors.text.secondary,
  },

  // Special Text Styles
  caption: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSize.sm,
    lineHeight: Typography.fontSize.sm * Typography.lineHeight.normal,
    color: Colors.text.muted,
  },

  label: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.base,
    lineHeight: Typography.fontSize.base * Typography.lineHeight.normal,
    color: Colors.text.primary,
  },

  buttonText: {
    fontFamily: Typography.fontFamily.semiBold,
    fontSize: Typography.fontSize.base,
    lineHeight: Typography.fontSize.base * Typography.lineHeight.tight,
    textAlign: 'center',
  },

  // Accent Text
  accent: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.base,
    lineHeight: Typography.fontSize.base * Typography.lineHeight.normal,
    color: Colors.text.accent,
  },

  // Link Text
  link: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSize.base,
    lineHeight: Typography.fontSize.base * Typography.lineHeight.normal,
    color: Colors.primary.teal,
    textDecorationLine: 'underline',
  },
});

// =============================================================================
// BUTTON STYLES
// =============================================================================

export const ButtonStyles = StyleSheet.create({
  // Base Button Styles
  baseButton: {
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56, // Larger for seniors
    ...Shadows.md,
  },

  // Primary Buttons
  primaryButton: {
    backgroundColor: Colors.primary.teal,
    borderWidth: 0,
  },

  primaryButtonText: {
    ...TextStyles.buttonText,
    color: Colors.text.inverse,
  },

  // Secondary Buttons
  secondaryButton: {
    backgroundColor: Colors.background.primary,
    borderWidth: 2,
    borderColor: Colors.primary.teal,
  },

  secondaryButtonText: {
    ...TextStyles.buttonText,
    color: Colors.primary.teal,
  },

  // Accent Buttons
  accentButton: {
    backgroundColor: Colors.primary.orange,
    borderWidth: 0,
  },

  accentButtonText: {
    ...TextStyles.buttonText,
    color: Colors.text.inverse,
  },

  // Outline Buttons
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.border.primary,
  },

  outlineButtonText: {
    ...TextStyles.buttonText,
    color: Colors.text.primary,
  },

  // Ghost Buttons
  ghostButton: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    ...Shadows.sm,
  },

  ghostButtonText: {
    ...TextStyles.buttonText,
    color: Colors.primary.teal,
  },

  // Disabled Button
  disabledButton: {
    backgroundColor: Colors.neutral.lightGray,
    borderWidth: 0,
  },

  disabledButtonText: {
    ...TextStyles.buttonText,
    color: Colors.text.muted,
  },

  // Size Variants
  smallButton: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    minHeight: 44,
  },

  largeButton: {
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing['2xl'],
    minHeight: 64,
  },

  // Full Width Button
  fullWidthButton: {
    width: '100%',
  },
});

// =============================================================================
// CARD STYLES
// =============================================================================

export const CardStyles = StyleSheet.create({
  baseCard: {
    backgroundColor: Colors.background.primary,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    ...Shadows.md,
  },

  accentCard: {
    backgroundColor: Colors.background.secondary,
    borderWidth: 1,
    borderColor: Colors.border.light,
  },

  highlightCard: {
    backgroundColor: Colors.background.primary,
    borderWidth: 2,
    borderColor: Colors.primary.teal,
  },

  warningCard: {
    backgroundColor: Colors.background.primary,
    borderWidth: 2,
    borderColor: Colors.primary.orange,
  },
});

// =============================================================================
// INPUT STYLES
// =============================================================================

export const InputStyles = StyleSheet.create({
  baseInput: {
    backgroundColor: Colors.background.primary,
    borderWidth: 2,
    borderColor: Colors.border.light,
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.text.primary,
    minHeight: 56, // Larger for seniors
  },

  focusedInput: {
    borderColor: Colors.primary.teal,
    ...Shadows.md,
  },

  errorInput: {
    borderColor: Colors.semantic.error,
  },

  disabledInput: {
    backgroundColor: Colors.background.accent,
    color: Colors.text.muted,
  },
});

// =============================================================================
// LAYOUT STYLES
// =============================================================================

export const LayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },

  contentContainer: {
    padding: Spacing.lg,
  },

  section: {
    marginBottom: Spacing.xl,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  column: {
    flexDirection: 'column',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },

  spaceAround: {
    justifyContent: 'space-around',
  },
});

// =============================================================================
// COMPONENT VARIANTS EXAMPLES
// =============================================================================

export const ComponentVariants = {
  // Doctor Card
  doctorCard: {
    ...CardStyles.baseCard,
    padding: Spacing.xl,
    marginBottom: Spacing.lg,
  },

  // Appointment Card
  appointmentCard: {
    ...CardStyles.highlightCard,
    padding: Spacing.lg,
    marginVertical: Spacing.sm,
  },

  // Emergency Button
  emergencyButton: {
    ...ButtonStyles.baseButton,
    backgroundColor: Colors.semantic.error,
    paddingVertical: Spacing.lg,
  },

  // Call Doctor Button
  callDoctorButton: {
    ...ButtonStyles.accentButton,
    borderRadius: BorderRadius.full,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing['3xl'],
  },

  // Status Badge
  statusBadge: {
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.primary.teal,
  },

  statusBadgeText: {
    ...TextStyles.caption,
    color: Colors.text.inverse,
    fontFamily: Typography.fontFamily.medium,
  },
};

// =============================================================================
// USAGE EXAMPLES
// =============================================================================

export const UsageExamples = {
  // Header Section
  headerSection: {
    backgroundColor: Colors.primary.teal,
    padding: Spacing.xl,
    paddingTop: Spacing['4xl'],
  },

  // Welcome Text
  welcomeText: {
    ...TextStyles.h2,
    color: Colors.text.inverse,
    textAlign: 'center',
    marginBottom: Spacing.md,
  },

  // Subtitle
  subtitle: {
    ...TextStyles.body,
    color: Colors.text.inverse,
    textAlign: 'center',
    opacity: 0.9,
  },

  // Feature Card
  featureCard: {
    ...CardStyles.baseCard,
    alignItems: 'center',
    padding: Spacing.xl,
    margin: Spacing.sm,
  },

  // Icon Container
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.background.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },

  // Feature Title
  featureTitle: {
    ...TextStyles.h4,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },

  // Feature Description
  featureDescription: {
    ...TextStyles.body,
    textAlign: 'center',
    color: Colors.text.secondary,
  },
};

// Export all styles as default
export default {
  Colors,
  Typography,
  Spacing,
  BorderRadius,
  Shadows,
  TextStyles,
  ButtonStyles,
  CardStyles,
  InputStyles,
  LayoutStyles,
  ComponentVariants,
  UsageExamples,
};
