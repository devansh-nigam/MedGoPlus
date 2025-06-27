import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
  Ellipse,
} from 'react-native-svg';

const { width: screenWidth } = Dimensions.get('window');

// Design System Colors
const Colors = {
  primary: {
    teal: '#319D9B',
    darkTeal: '#237373',
    orange: '#F28C28',
  },
};

const CreativeHeaderBackground = () => {
  return (
    <View style={styles.headerBackgroundContainer}>
      {/* SVG Wave Patterns */}
      <Svg
        height="100%"
        width="100%"
        style={StyleSheet.absoluteFillObject}
        viewBox={`0 0 ${screenWidth} 450`}
      >
        <Defs>
          <LinearGradient id="waveGradient1" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0%" stopColor={Colors.primary.teal} stopOpacity="1" />
            <Stop
              offset="100%"
              stopColor={Colors.primary.darkTeal}
              stopOpacity="1"
            />
          </LinearGradient>
          <LinearGradient id="waveGradient2" x1="0" y1="0" x2="1" y2="0">
            <Stop
              offset="0%"
              stopColor={Colors.primary.orange}
              stopOpacity="0.3"
            />
            <Stop
              offset="50%"
              stopColor={Colors.primary.orange}
              stopOpacity="0.1"
            />
            <Stop
              offset="100%"
              stopColor={Colors.primary.orange}
              stopOpacity="0.2"
            />
          </LinearGradient>
          <LinearGradient id="circleGradient" x1="0" y1="0" x2="1" y2="1">
            <Stop
              offset="0%"
              stopColor={Colors.primary.orange}
              stopOpacity="0.15"
            />
            <Stop
              offset="100%"
              stopColor={Colors.primary.orange}
              stopOpacity="0.05"
            />
          </LinearGradient>
          <LinearGradient id="statusBarGradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0%" stopColor={Colors.primary.teal} stopOpacity="1" />
            <Stop
              offset="100%"
              stopColor={Colors.primary.teal}
              stopOpacity="0.95"
            />
          </LinearGradient>
        </Defs>

        {/* Status Bar Seamless Blend Area */}
        <Path
          d={`M0,0 L${screenWidth},0 L${screenWidth},60 L0,60 Z`}
          fill="url(#statusBarGradient)"
        />

        {/* Main Wave Pattern - covers status bar area */}
        <Path
          d={`M0,0 L${screenWidth},0 L${screenWidth},250 Q${
            screenWidth * 0.75
          },300 ${screenWidth * 0.5},250 T0,270 Z`}
          fill="url(#waveGradient1)"
        />

        {/* Secondary Wave for depth */}
        <Path
          d={`M0,80 Q${screenWidth * 0.25},120 ${
            screenWidth * 0.5
          },100 T${screenWidth},120 L${screenWidth},0 L0,0 Z`}
          fill="url(#waveGradient2)"
        />

        {/* Bottom Wave for smooth transition */}
        <Path
          d={`M0,350 Q${
            screenWidth * 0.5
          },320 ${screenWidth},350 L${screenWidth},450 L0,450 Z`}
          fill="url(#waveGradient1)"
          opacity="0.3"
        />

        {/* Decorative Circles */}
        <Circle
          cx={screenWidth * 0.85}
          cy="100"
          r="25"
          fill="url(#circleGradient)"
        />
        <Circle
          cx={screenWidth * 0.15}
          cy="160"
          r="15"
          fill="url(#circleGradient)"
        />
        <Ellipse
          cx={screenWidth * 0.7}
          cy="180"
          rx="30"
          ry="20"
          fill="url(#circleGradient)"
        />

        {/* Medical Cross Pattern */}
        <Path
          d={`M${screenWidth * 0.9 - 8},70 L${screenWidth * 0.9 + 8},70 L${
            screenWidth * 0.9 + 8
          },78 L${screenWidth * 0.9 + 16},78 L${screenWidth * 0.9 + 16},94 L${
            screenWidth * 0.9 + 8
          },94 L${screenWidth * 0.9 + 8},102 L${screenWidth * 0.9 - 8},102 L${
            screenWidth * 0.9 - 8
          },94 L${screenWidth * 0.9 - 16},94 L${screenWidth * 0.9 - 16},78 L${
            screenWidth * 0.9 - 8
          },78 Z`}
          fill={Colors.primary.orange}
          opacity="0.4"
        />

        {/* Additional decorative elements */}
        <Circle
          cx={screenWidth * 0.25}
          cy="220"
          r="8"
          fill={Colors.primary.orange}
          opacity="0.3"
        />
        <Circle
          cx={screenWidth * 0.75}
          cy="60"
          r="12"
          fill={Colors.primary.orange}
          opacity="0.2"
        />

        {/* Small accent dots */}
        <Circle
          cx={screenWidth * 0.1}
          cy="50"
          r="3"
          fill={Colors.primary.orange}
          opacity="0.4"
        />
        <Circle
          cx={screenWidth * 0.2}
          cy="35"
          r="2"
          fill={Colors.primary.orange}
          opacity="0.3"
        />
        <Circle
          cx={screenWidth * 0.8}
          cy="45"
          r="4"
          fill={Colors.primary.orange}
          opacity="0.3"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBackgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
});

export default CreativeHeaderBackground;
