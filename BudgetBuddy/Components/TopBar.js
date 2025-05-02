import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const TopBar = ({ username = 'User', onProfilePress = () => {} }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={onProfilePress}>
          <Image
            source={require('../assets/MESSI.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <Text style={styles.greeting}>Hello, {username}</Text>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
