import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from './src/design-tokens/colors';
import { Spacing } from './src/design-tokens/spacing';
import { Typography } from './src/design-tokens/typography';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
      <View
        style={{
          backgroundColor: Colors.background,
          padding: Spacing.md,
        }}
      >
        <Text
          style={{
            color: Colors.textPrimary,
            fontSize: Typography.body.fontSize,
            //fontWeight: Typography.body.fontWeight,
          }}
        >
          Welcome to the Senior Health App
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            paddingVertical: Spacing.sm,
            paddingHorizontal: Spacing.lg,
            borderRadius: 8,
            marginTop: Spacing.md,
          }}
        >
          <Text
            style={{
              color: Colors.onPrimary,
              textAlign: 'center',
              fontSize: Typography.label.fontSize,
              //fontWeight: Typography.label.fontWeight,
            }}
          >
            Book Appointment
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default App;
