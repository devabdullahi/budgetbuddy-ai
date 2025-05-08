import React from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';
import DailyTip from '../Components/DailyTip';
import BudgetChart from '../Components/BudgetChart';
import TopBar from '../Components/TopBar'
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <TopBar/>
          <DailyTip />
          <BudgetChart />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;