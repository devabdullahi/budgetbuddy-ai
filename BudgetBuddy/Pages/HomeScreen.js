import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.visibleText}>Style this</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background
    alignItems: 'center',
    justifyContent: 'center',
  },
  visibleText: {
    fontSize: 24,         // Bigger font 
    color: '#222',        // Dark color
    fontWeight: '600',    // Bold
  },
});
