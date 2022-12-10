/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, Button, TextInput, Text, StyleSheet} from 'react-native';

const SimpleForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  function submitForm() {
    if (!name) {
      alert('name field should not be empty');
    } else if (!password) {
      alert('password field should not be empty');
    } else if (!address) {
      alert('address field should not be empty');
    } else {
      alert('Successfully submited');
    }
  }
  return (
    <View>
      <TextInput
        style={styles.nameTextInput}
        value={name}
        placeholder="Enter Name"
        onChangeText={e => {
          setName(e);
        }}
        placeholderTextColor="blue"
      />
      <TextInput
        style={styles.passwordTextInput}
        value={password}
        placeholder="Enter Password"
        onChangeText={e => {
          setPassword(e);
        }}
        placeholderTextColor="blue"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.addressTextInput}
        value={address}
        placeholder="Enter Address"
        onChangeText={e => {
          setAddress(e);
        }}
        placeholderTextColor="blue"
      />
      <Button title="Submit" onPress={submitForm} />
    </View>
  );
};

const styles = StyleSheet.create({
  nameTextInput: {
    borderColor: 'skyblue',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 25,
  },
  passwordTextInput: {
    borderColor: 'skyblue',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 25,
  },
  addressTextInput: {
    borderColor: 'skyblue',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 25,
  },
});

export default SimpleForm;
