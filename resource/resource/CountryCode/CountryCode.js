//This File is working only in app.js in root folder

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const CountryCode = () => {
  const [phoneNumber, setphoneNumber] = useState('');
  return (
    <View style={styles.Container}>
      <Text>Phone Number Input</Text>
      <PhoneInput
        defaultValue={phoneNumber}
        defaultCode="IN"
        //  withShadow containerStyle={}
        //  textContainerStyle={}
        onChangeFormattedText={text => {
          setphoneNumber(text);
        }}
      />
      <TouchableOpacity
        style={styles.PhoneButton}
        onPress={() => {
          Alert.alert(phoneNumber);
        }}>
        <Text>Get phone number</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountryCode;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
