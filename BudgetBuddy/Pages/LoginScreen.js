import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      <Image
        source={require('../assets/comp_icon.png')}
        style={styles.logo}
      />
      
      <Text style={styles.WelcomeText}>BudgetBuddy</Text>
      <Text style={styles.Description}>Your AI-Powered guide to smarter money decisions</Text>

      <TouchableOpacity style={styles.SignupBox}>
        <Text style={styles.SignupText}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.LoginBox}>
        <Text style={styles.LoginText}>Login</Text>
      </TouchableOpacity>


      <Text style={styles.Description2}>or continue with</Text>

      <TouchableOpacity style={styles.Google}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('../assets/google_g_icon.png')}
            style={{ width: 30, height: 20, marginRight: 10 }}
          />
          <Text style={styles.GoogleText}>Continue with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 80,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  WelcomeText: {
    fontSize: 42,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  Description: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 60,
  },
  SignupBox: {
    backgroundColor: 'black',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: '45%',
    marginBottom: 25,
  },
  SignupText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  LoginBox: {
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: '45%',
    borderColor: 'black',
    borderWidth: 2,

  },
  LoginText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  Description2: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 60,
  },

  Google: {
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: '45%',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 25
  },
  
  GoogleText: {
    fontSize: 16,
    color: '#000',
  }
});

export default LoginScreen;
