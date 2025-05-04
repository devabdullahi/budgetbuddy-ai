import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DailyTip from '../Components/DailyTip'

const HomeScreen = () => {
  return ( 
    <View style={styles.container}>
      <DailyTip/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
})

export default HomeScreen;