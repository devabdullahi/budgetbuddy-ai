import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import Icon from 'react-native-vector-icons/Ionicons';

const spendingData = [
  { value: 450, color: '#4A90E2', text: 'Food', icon: 'fast-food-outline' },
  { value: 1200, color: '#50E3C2', text: 'Rent', icon: 'home-outline' },
  { value: 200, color: '#F5A623', text: 'Transport', icon: 'car-outline' },
];

const BudgetChart = () => {
  return (
    <View style={styles.centeredContent}>
      <Text style={styles.title}>Budget Overview</Text>
      <View style={styles.chartCard}>
        <PieChart
          data={spendingData}
          
          donut
          showText
          textColor="#333"
          radius={80}
          textSize={14}
          focusOnPress
          centerLabelComponent={() => (
            <Text style={styles.centerLabel}>Budget Chart</Text>
          )}
        />
      </View>
      <Text style={styles.subtitle}>Spending Breakdown</Text>
      <View style={styles.breakdownCard}>
        {spendingData.map((item, idx) => (
          <View key={item.text} style={[styles.breakdownRow, idx === spendingData.length-1 && {borderBottomWidth: 0}]}> 
            <View style={styles.rowLeft}>
              <Icon name={item.icon} size={18} color="#222" style={{marginRight: 8} } />
              <Text style={styles.categoryText}>{item.text}</Text>
            </View>
            <Text style={styles.amountText}>${item.value.toLocaleString()}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputCard}>
        <TextInput
          style={styles.input}
          placeholder="Ask me anything about your money..."
          placeholderTextColor="#888"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={styles.inputIcon}>
          <Icon name="send" size={20} color="#222" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update Expenses</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.suggestionButton}>
        <Text style={styles.suggestionButtonText}>Get Smart Suggestion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredContent: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 12,
    marginLeft: 4,
  },
  chartCard: {
    backgroundColor: '#f4f4f6',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
    marginBottom: 20,
  },
  centerLabel: {
    color: '#aaa',
    fontSize: 16,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginBottom: 8,
    marginLeft: 4,
  },
  breakdownCard: {
    backgroundColor: '#f4f4f6',
    borderRadius: 12,
    marginBottom: 18,
    overflow: 'hidden',
  },
  breakdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    backgroundColor: '#f4f4f6',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 15,
    color: '#222',
    fontWeight: '600',
  },
  amountText: {
    fontSize: 15, 
    color: '#222',
  },
  inputCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f6',
    borderRadius: 8,
    marginBottom: 14,
    paddingHorizontal: 8,
    height: 44,
    width: '100%',
  },
  input: {
    flex: 1,
    minWidth: 0,
    fontSize: 15,
    color: '#222',
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingVertical: 0,
  },
  inputIcon: {
    padding: 4,
  },
  updateButton: {
    backgroundColor: '#111',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    marginBottom: 10,
    zIndex: 1,
  },
  updateButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  suggestionButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    backgroundColor: '#fff',
  },
  suggestionButtonText: {
    color: '#222',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default BudgetChart;