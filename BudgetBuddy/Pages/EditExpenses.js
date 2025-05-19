import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import Icon from 'react-native-vector-icons/Ionicons';

const EditExpenses = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, value: 450, color: '#4A90E2', text: 'Food', icon: 'fast-food-outline' },
    { id: 2, value: 1200, color: '#50E3C2', text: 'Rent', icon: 'home-outline' },
    { id: 3, value: 200, color: '#F5A623', text: 'Transport', icon: 'car-outline' },
  ]);
  const [showOptions, setShowOptions] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newExpense, setNewExpense] = useState({ text: '', value: '' });

  const handleEdit = (id) => {
    // TODO: Implement edit functionality
    setShowOptions(null);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
    setShowOptions(null);
  };

  const handleAddExpense = () => {
    if (newExpense.text && newExpense.value) {
      const newId = Math.max(...expenses.map(e => e.id)) + 1;
      const colors = ['#4A90E2', '#50E3C2', '#F5A623', '#FF6B6B', '#9B59B6'];
      const icons = ['fast-food-outline', 'home-outline', 'car-outline', 'shirt-outline', 'medical-outline'];
      
      setExpenses([...expenses, {
        id: newId,
        value: Number(newExpense.value),
        color: colors[Math.floor(Math.random() * colors.length)],
        text: newExpense.text,
        icon: icons[Math.floor(Math.random() * icons.length)]
      }]);
      setNewExpense({ text: '', value: '' });
      setShowAddModal(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.centeredContent}>
          <Text style={styles.title}>Edit Expenses</Text>
          <View style={styles.chartCard}>
            <PieChart
              data={expenses}
              donut
              showText
              textColor="#333"
              radius={80}
              textSize={14}
              focusOnPress
              centerLabelComponent={() => (
                <Text style={styles.centerLabel}>Expenses</Text>
              )}
            />
          </View>
          <Text style={styles.subtitle}>Expense Breakdown</Text>
          <View style={styles.breakdownCard}>
            {expenses.map((item, idx) => (
              <View key={item.id} style={[styles.breakdownRow, idx === expenses.length-1 && {borderBottomWidth: 0}]}>
                <View style={styles.rowLeft}>
                  <Icon name={item.icon} size={18} color="#222" style={{marginRight: 8}} />
                  <Text style={styles.categoryText}>{item.text}</Text>
                </View>
                <View style={styles.rowRight}>
                  <Text style={styles.amountText}>${item.value.toLocaleString()}</Text>
                  <TouchableOpacity 
                    style={styles.optionsButton}
                    onPress={() => setShowOptions(showOptions === item.id ? null : item.id)}
                  >
                    <Icon name="ellipsis-vertical" size={20} color="#666" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
          
          {showOptions !== null && (
            <View style={styles.optionsMenu}>
              <TouchableOpacity style={styles.optionItem} onPress={() => handleEdit(showOptions)}>
                <Icon name="pencil" size={16} color="#666" />
                <Text style={styles.optionText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionItem} onPress={() => handleDelete(showOptions)}>
                <Icon name="trash" size={16} color="#666" />
                <Text style={styles.optionText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => setShowAddModal(true)}
          >
            <Icon name="add" size={24} color="#fff" />
            <Text style={styles.addButtonText}>Add Expense</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        visible={showAddModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowAddModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Expense</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Expense Name"
              value={newExpense.text}
              onChangeText={(text) => setNewExpense({...newExpense, text})}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Amount"
              keyboardType="numeric"
              value={newExpense.value}
              onChangeText={(value) => setNewExpense({...newExpense, value})}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowAddModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.addButton]}
                onPress={handleAddExpense}
              >
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  centeredContent: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 32,
    paddingHorizontal: 16,
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
  rowRight: {
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
    marginRight: 8,
  },
  optionsContainer: {
    position: 'relative',
  },
  optionsButton: {
    padding: 4,
  },
  optionsMenu: {
    position: 'absolute',
    right: 16,
    top: 80,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  optionText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#111',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    marginBottom: 10,
    alignContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 16,
  },
  modalInput: {
    backgroundColor: '#f4f4f6',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  modalButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginLeft: 8,
  },
  cancelButton: {
    backgroundColor: '#f4f4f6',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    marginBottom: 10,
    alignContent: 'center',
  },
  cancelButtonText: {
    color: '#666',
    fontWeight: '600',
  },
});

export default EditExpenses;