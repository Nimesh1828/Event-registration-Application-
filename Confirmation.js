// Confirmation.js
import React from 'react';
import { View, Text, StyleSheet, Button,ImageBackground,TouchableOpacity } from 'react-native';
import { styles as style1 } from './RegistrationForm';
const Confirmation = ({ details, onBack }) => {
  return (
    <ImageBackground
    source={{ uri: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Use URI instead of require()
    style={style1.background}
    blurRadius={5} 
  >
          <Text style={styles.title}>Event Registration Form</Text>

    <View style={styles.container} testID='confirmationDetails'>
      
    </View>
    </ImageBackground>
  );

};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color:'#CA804D',
    textAlign:'center',
    fontWeight:'bold'

  },
  detail: {
    fontSize: 18,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#CA804D',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Confirmation;
