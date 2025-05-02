import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TopBar = ({ username = 'User', onProfilePress = () => {}, onSettingsPress = () => {} }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Left side: Avatar + Greeting */}
        <View style={styles.leftSection}>
          <TouchableOpacity onPress={onProfilePress}>
            <Image
              source={require('../assets/MESSI.png')}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <Text style={styles.greeting}>Hello, {username}</Text>
        </View>

        {/* Right side: Settings icon */}
        <TouchableOpacity onPress={onSettingsPress}>
          <Icon name="settings-outline" size={24} color="black" style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 19,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    elevation: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
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
  settingsIcon: {
    marginRight: 15,
  }
});
