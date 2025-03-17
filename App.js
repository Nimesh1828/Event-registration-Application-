import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RegistrationForm from './RegistrationForm';
import Confirmation from './Confirmation';

const App = () => {
  const [registrationDetails, setRegistrationDetails] = useState(null);

  const handleConfirm = (details) => {
    setRegistrationDetails(details);
  };

  const handleBack = () => {
    setRegistrationDetails(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      {registrationDetails ? (
        <Confirmation details={registrationDetails} onBack={handleBack} />
      ) : (
        <RegistrationForm onConfirm={handleConfirm} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default App;