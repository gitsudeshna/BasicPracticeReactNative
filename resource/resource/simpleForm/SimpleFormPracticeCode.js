/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, Button, TextInput, Text, StyleSheet} from 'react-native';

const SimpleFormPractice = () => {
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');
  // const [address, setAddress] = useState('');
  const user = {
    username: 'test@gmail.com',
    password: '1234',
    check: true,
  };
  const {username, password, check} = user;
  const submitForm = () => {
    // alert('function called');
    if (!username) {
      alert('name field should not be empty');
    } else if (!password) {
      alert('password field should not be empty');
    } else if (check) {
      alert('address field should not be empty');
    } else {
      alert('Successfully submited');
    }
  };
  return (
    <View>
      <TextInput
        style={styles.nameTextInput}
        value={username}
        placeholder="Enter Name"
        // onChangeText={e => {
        //   setName(e);
        // }}
        placeholderTextColor="blue"
      />
      <TextInput
        style={styles.passwordTextInput}
        value={password}
        placeholder="Enter Password"
        // onChangeText={e => {
        //   setPassword(e);
        // }}
        placeholderTextColor="blue"
      />
      <TextInput
        style={styles.addressTextInput}
        value={username}
        placeholder="Enter Address"
        // onChangeText={e => {
        //   setAddress(e);
        // }}
        placeholderTextColor="blue"
      />
      <Button title="Submit" onPress={submitForm} />
    </View>
  );
};

const styles = StyleSheet.create({
  nameTextInput: {
    height: 80,
    backgroundColor: 'gray',
    borderColor: 'skyblue',
    borderWidth: 2,
  },
  passwordTextInput: {
    height: 80,
    backgroundColor: 'gray',
    borderColor: 'skyblue',
    borderWidth: 2,
  },
  addressTextInput: {
    height: 80,
    backgroundColor: 'gray',
    borderColor: 'skyblue',
    borderWidth: 2,
  },
});

export default SimpleFormPractice;
