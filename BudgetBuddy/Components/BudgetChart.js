import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-gifted-charts';

const BudgetChart = () => {
  // Sample data
  const lineData = [
    { value: 15, label: 'Jan' },
    { value: 30, label: 'Feb' },
    { value: 26, label: 'Mar' },
    { value: 40, label: 'Apr' },
  ];

  const barData = [
    { value: 15, label: 'Jan', frontColor: '#177AD5' },
    { value: 30, label: 'Feb', frontColor: '#ED6665' },
    { value: 26, label: 'Mar', frontColor: '#8B78FF' },
    { value: 40, label: 'Apr', frontColor: '#FFA32B' },
  ];

  const pieData = [
    { value: 40, color: '#177AD5', text: '40%' },
    { value: 20, color: '#ED6665', text: '20%' },
    { value: 30, color: '#8B78FF', text: '30%' },
    { value: 10, color: '#FFA32B', text: '10%' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Line Chart Example</Text>
      <LineChart
        data={lineData}
        width={300}
        height={200}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisColor="#aaa"
        xAxisColor="#aaa"
        showVerticalLines
        spacing={50}
      />

      <Text style={styles.title}>Bar Chart Example</Text>
      <BarChart
        data={barData}
        width={300}
        height={200}
        barWidth={30}
        noOfSections={4}
        yAxisColor="#aaa"
        xAxisColor="#aaa"
      />

      <Text style={styles.title}>Pie Chart Example</Text>
      <PieChart
        data={pieData}
        donut
        showText
        textColor="black"
        radius={80}
        textSize={12}
        focusOnPress
        centerLabelComponent={() => (
          <Text style={{ fontSize: 16 }}>Total</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
  },
});

export default BudgetChart;