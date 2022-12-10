/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  function submitForm() {
    if (!email) {
      alert('Enter Email');
    } else if (!contact) {
      alert('Enter Contact');
    } else {
      alert('Succesfull');
    }
  }

  return (
    <View>
      <TextInput
        placeholder="enter your email"
        value={email}
        onChangeText={e => {
          setEmail(e);
        }}
        style={styles.TextBox}
      />
      <TextInput
        placeholder="enter your contcat number"
        value={contact}
        onChangeText={e => {
          setContact(e);
        }}
        style={styles.TextBox}
        keyboardType="number-pad"
      />
      <Button title="submit" onPress={submitForm} />
    </View>
  );
};

const styles = StyleSheet.create({
  TextBox: {
    borderColor: 'skyblue',
    borderWidth: 2,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default RegistrationForm;
