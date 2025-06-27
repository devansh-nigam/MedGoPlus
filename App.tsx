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
import MedGoLandingPage from './MedGoLandingPage';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
      <MedGoLandingPage />
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
