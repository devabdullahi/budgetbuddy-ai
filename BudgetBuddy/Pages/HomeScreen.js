import { ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';
import DailyTip from '../Components/DailyTip';
import BudgetChart from '../Components/BudgetChart';
import TopBar from '../Components/TopBar';

const HomeScreen = ({ navigation }) => {  // Destructure the navigation prop
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <TopBar/>
          <DailyTip/>
          <BudgetChart navigation={navigation}/>  
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;