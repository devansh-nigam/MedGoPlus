import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  withSequence,
  runOnJS,
  interpolate,
} from 'react-native-reanimated';
import CreativeHeaderBackground from './CreativeHeaderBackground';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Design System
const Colors = {
  primary: {
    teal: '#319D9B',
    darkTeal: '#237373',
    orange: '#F28C28',
  },
  neutral: {
    beige: '#FDF3E7',
    lightGray: '#F4F4F4',
    darkBrown: '#3D2F2B',
    white: '#FFFFFF',
  },
  text: {
    primary: '#3D2F2B',
    secondary: '#237373',
    accent: '#F28C28',
    inverse: '#FFFFFF',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#FDF3E7',
  },
};

const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
  '4xl': 56,
  '5xl': 64,
};

const Typography = {
  fontSize: {
    sm: 16,
    base: 18,
    lg: 20,
    xl: 24,
    '2xl': 28,
    '3xl': 32,
    '4xl': 36,
    '5xl': 48,
  },
};

// Animated Text Component
const AnimatedText = ({ children, delay = 0, style = {} }) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(30);

  useEffect(() => {
    setTimeout(() => {
      opacity.value = withTiming(1, { duration: 800 });
      translateY.value = withSpring(0, { damping: 15 });
    }, delay);
  }, [delay, opacity, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
  );
};

// Floating Animation Component
const FloatingElement = ({ children, duration = 3000 }) => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withTiming(-15, { duration: duration / 2 }),
        withTiming(0, { duration: duration / 2 }),
      ),
      -1,
      true,
    );
  }, [duration, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay }) => {
  const scale = useSharedValue(0.8);

  useEffect(() => {
    setTimeout(() => {
      scale.value = withSpring(1, { damping: 10 });
    }, delay);
  }, [delay, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedText delay={delay} style={styles.featureCardContainer}>
      <Animated.View style={[styles.featureCard, animatedStyle]}>
        <FloatingElement duration={4000}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>{icon}</Text>
          </View>
        </FloatingElement>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
      </Animated.View>
    </AnimatedText>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ targetNumber, label, delay }) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.5);

  const animateNumber = target => {
    let current = 0;
    const increment = target / 60; // 60 frames for smooth animation
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayNumber(target);
        clearInterval(timer);
      } else {
        setDisplayNumber(Math.floor(current));
      }
    }, 16); // ~60fps
  };

  useEffect(() => {
    setTimeout(() => {
      opacity.value = withTiming(1, { duration: 600 });
      scale.value = withSpring(1, { damping: 8 });
      runOnJS(animateNumber)(targetNumber);
    }, delay);
  }, [targetNumber, delay, opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.statCard, animatedStyle]}>
      <Text style={styles.statNumber}>{displayNumber.toLocaleString()}+</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </Animated.View>
  );
};

// Pulsing Button Component
const PulsingButton = ({ onPress, title, style, textStyle, delay = 0 }) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0);

  useEffect(() => {
    setTimeout(() => {
      opacity.value = withTiming(1, { duration: 600 });
      // Subtle pulsing animation
      scale.value = withRepeat(
        withSequence(
          withTiming(1.05, { duration: 1000 }),
          withTiming(1, { duration: 1000 }),
        ),
        -1,
        true,
      );
    }, delay);
  }, [delay, opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    scale.value = withSequence(
      withTiming(0.95, { duration: 100 }),
      withTiming(1, { duration: 100 }),
    );
    setTimeout(onPress, 100);
  };

  return (
    // <Animated.View style={animatedStyle}>
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
    // </Animated.View>
  );
};

// Background Floating Elements
const BackgroundFloatingElements = () => {
  return (
    <View style={styles.backgroundElements}>
      <FloatingElement duration={4000}>
        <View style={[styles.floatingCircle, styles.circle1]} />
      </FloatingElement>
      <FloatingElement duration={5000}>
        <View style={[styles.floatingCircle, styles.circle2]} />
      </FloatingElement>
      <FloatingElement duration={6000}>
        <View style={[styles.floatingCircle, styles.circle3]} />
      </FloatingElement>
    </View>
  );
};

// Main Landing Page Component
const MedGoLandingPage = () => {
  const handleGetStarted = () => {
    Alert.alert(
      'Welcome to MedGo+! 🏥',
      'Your healthcare journey begins here. Book your first consultation today!',
      [
        { text: 'Book Now', onPress: () => console.log('Booking...') },
        { text: 'Learn More', onPress: () => console.log('Learning...') },
      ],
    );
  };

  const handleLearnMore = () => {
    Alert.alert(
      'MedGo+ Features',
      "Discover how we're revolutionizing healthcare for senior citizens across India.",
      [{ text: 'Got it!', onPress: () => console.log('Understood') }],
    );
  };

  return (
    <View style={styles.container}>
      <BackgroundFloatingElements />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.headerContent}>
            {/* Logo/Brand Animation */}
            <AnimatedText delay={300} style={styles.logoContainer}>
              <FloatingElement duration={6000}>
                <View style={styles.logoWrapper}>
                  <Text style={styles.logoText}>
                    MedGo<Text style={styles.logoAccent}>+</Text>
                  </Text>
                </View>
              </FloatingElement>
            </AnimatedText>

            {/* Tagline */}
            <AnimatedText delay={600}>
              <Text style={styles.tagline}>Healthcare at Your Doorstep</Text>
            </AnimatedText>

            <AnimatedText delay={900}>
              <Text style={styles.subtitle}>
                Connecting senior citizens with qualified doctors through
                doorstep consultations and secure video calls across urban and
                rural India.
              </Text>
            </AnimatedText>

            {/* CTA Button */}
            <PulsingButton
              onPress={handleGetStarted}
              title="Get Started Today 🚀"
              style={styles.primaryButton}
              textStyle={styles.primaryButtonText}
              delay={1200}
            />
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <AnimatedText delay={2200}>
            <Text style={styles.sectionTitle}>Why Choose MedGo+?</Text>
          </AnimatedText>

          <AnimatedText delay={2400}>
            <Text style={styles.sectionSubtitle}>
              Experience healthcare that comes to you, designed especially for
              India's senior citizens.
            </Text>
          </AnimatedText>

          <View style={styles.featuresGrid}>
            <FeatureCard
              icon="🏠"
              title="Doorstep Care"
              description="Qualified doctors visit you at home for comprehensive medical consultations and treatments."
              delay={2600}
            />
            <FeatureCard
              icon="📱"
              title="Video Consultations"
              description="Secure, high-quality video calls with doctors when you need immediate medical advice."
              delay={2800}
            />
            <FeatureCard
              icon="🌍"
              title="Rural Reach"
              description="Bridging healthcare gaps in both urban metros and remote rural areas across India."
              delay={3000}
            />
          </View>
        </View>

        {/* Call-to-Action Section */}
        <View style={styles.ctaSection}>
          <AnimatedText delay={3200}>
            <Text style={styles.ctaTitle}>
              Ready to Transform Your Healthcare Experience?
            </Text>
          </AnimatedText>

          <AnimatedText delay={3400}>
            <Text style={styles.ctaSubtitle}>
              Join thousands of families who trust MedGo+ for their healthcare
              needs.
            </Text>
          </AnimatedText>

          <AnimatedText delay={3600} style={styles.ctaButtons}>
            <PulsingButton
              onPress={handleGetStarted}
              title="Book Your First Consultation"
              style={styles.ctaPrimaryButton}
              textStyle={styles.ctaPrimaryButtonText}
              delay={3800}
            />

            <PulsingButton
              onPress={handleLearnMore}
              title="Learn More"
              style={styles.ctaSecondaryButton}
              textStyle={styles.ctaSecondaryButtonText}
              delay={4000}
            />
          </AnimatedText>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },

  scrollContent: {
    flexGrow: 1,
  },

  backgroundElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },

  floatingCircle: {
    position: 'absolute',
    borderRadius: 100,
    opacity: 0.1,
  },

  circle1: {
    width: 120,
    height: 120,
    backgroundColor: Colors.primary.teal,
    top: 100,
    right: 50,
  },

  circle2: {
    width: 80,
    height: 80,
    backgroundColor: Colors.primary.orange,
    bottom: 200,
    left: 30,
  },

  circle3: {
    width: 60,
    height: 60,
    backgroundColor: Colors.primary.teal,
    top: '50%',
    left: '30%',
  },

  headerSection: {
    backgroundColor: Colors.primary.teal,
    paddingTop: Spacing['5xl'],
    paddingBottom: Spacing['5xl'],
    paddingHorizontal: Spacing.lg,
    position: 'relative',
    zIndex: 1,
  },

  headerContent: {
    alignItems: 'center',
  },

  logoContainer: {
    marginBottom: Spacing.lg,
  },

  logoWrapper: {
    alignItems: 'center',
  },

  logoText: {
    fontSize: Typography.fontSize['5xl'],
    fontWeight: 'bold',
    color: Colors.text.inverse,
    textAlign: 'center',
  },

  logoAccent: {
    color: Colors.primary.orange,
  },

  tagline: {
    fontSize: Typography.fontSize['2xl'],
    fontWeight: '600',
    color: Colors.text.inverse,
    textAlign: 'center',
    marginBottom: Spacing.md,
  },

  subtitle: {
    fontSize: Typography.fontSize.lg,
    color: Colors.text.inverse,
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: Spacing['3xl'],
    paddingHorizontal: Spacing.md,
    opacity: 0.95,
  },

  button: {
    borderRadius: 16,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing['2xl'],
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 64,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  primaryButton: {
    backgroundColor: Colors.primary.orange,
    marginBottom: Spacing['2xl'],
  },

  buttonText: {
    fontSize: Typography.fontSize.lg,
    fontWeight: '600',
    textAlign: 'center',
  },

  primaryButtonText: {
    color: Colors.text.inverse,
  },

  statsContainer: {
    marginTop: Spacing.lg,
  },

  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    paddingVertical: Spacing.xl,
    paddingHorizontal: Spacing.lg,
  },

  statCard: {
    alignItems: 'center',
    flex: 1,
  },

  statNumber: {
    fontSize: Typography.fontSize['3xl'],
    fontWeight: 'bold',
    color: Colors.primary.orange,
    marginBottom: Spacing.xs,
  },

  statLabel: {
    fontSize: Typography.fontSize.base,
    color: Colors.text.inverse,
    textAlign: 'center',
  },

  featuresSection: {
    paddingVertical: Spacing['4xl'],
    paddingHorizontal: Spacing.lg,
    backgroundColor: Colors.background.primary,
  },

  sectionTitle: {
    fontSize: Typography.fontSize['3xl'],
    fontWeight: 'bold',
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: Spacing.md,
  },

  sectionSubtitle: {
    fontSize: Typography.fontSize.lg,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: Spacing['2xl'],
    paddingHorizontal: Spacing.md,
  },

  featuresGrid: {
    gap: Spacing.lg,
  },

  featureCardContainer: {
    marginBottom: Spacing.md,
  },

  featureCard: {
    backgroundColor: Colors.background.primary,
    borderRadius: 20,
    padding: Spacing.xl,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },

  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.background.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.lg,
  },

  iconText: {
    fontSize: 32,
  },

  featureTitle: {
    fontSize: Typography.fontSize.xl,
    fontWeight: '600',
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: Spacing.md,
  },

  featureDescription: {
    fontSize: Typography.fontSize.base,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 26,
  },

  ctaSection: {
    backgroundColor: Colors.background.secondary,
    paddingVertical: Spacing['4xl'],
    paddingHorizontal: Spacing.lg,
  },

  ctaTitle: {
    fontSize: Typography.fontSize['3xl'],
    fontWeight: 'bold',
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: Spacing.lg,
  },

  ctaSubtitle: {
    fontSize: Typography.fontSize.lg,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: Spacing['2xl'],
  },

  ctaButtons: {
    gap: Spacing.md,
  },

  ctaPrimaryButton: {
    backgroundColor: Colors.primary.teal,
    marginBottom: Spacing.md,
  },

  ctaPrimaryButtonText: {
    color: Colors.text.inverse,
  },

  ctaSecondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.primary.teal,
  },

  ctaSecondaryButtonText: {
    color: Colors.text.primary,
  },
});

export default MedGoLandingPage;
