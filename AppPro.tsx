import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {color: '#ffffff'},
  darkText: {color: '#000000'},
});
export default AppPro;
