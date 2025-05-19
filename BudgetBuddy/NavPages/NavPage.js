import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../Pages/LoginScreen";
import HomeScreen from "../Pages/HomeScreen";
import EditExpenses from "../Pages/EditExpenses";

const { Navigator, Screen } = createStackNavigator();

const NavPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Navigator initialRouteName="Login">
          <Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Screen name="Home" component={HomeScreen} />

          <Screen name="EditEx" component={EditExpenses}  options={{ headerShown: false }} />
        </Navigator>
      </NavigationContainer>
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
});

export default NavPage;