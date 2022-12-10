/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const ProfilePractice = () => {
  const defaultValues = {
    name: '',
    namePlaceHolder: '',
    nameError: '',
    email: '',
    emailPlaceHolder: '',
    emailError: '',
    contact: '',
    contactPlaceHolder: '',
    contactError: '',
    address: '',
    addressPlaceHolder: '',
    addressError: '',
  };

const [mainUser, setMainUser] = useState(defaultValues);

  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Name</Text>
      <TextInput
        style={{backgroundColor: '#f5f5f5', height: 40}}
        term={mainUser.name}
        placeholder={mainUser.namePlaceHolder}
        errorText={mainUser.nameError}
      />
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Email</Text>
      <TextInput
        style={{backgroundColor: '#f5f5f5', height: 40}}
        term={mainUser.email}
        placeholder={mainUser.emailPlaceHolder}
        errorText={mainUser.emailError}
      />
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Contact</Text>
      <TextInput
        style={{backgroundColor: '#f5f5f5', height: 40}}
        term={mainUser.contact}
        placeholder={mainUser.contactPlaceHolder}
        errorText={mainUser.contactError}
      />
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Address</Text>
      <TextInput
        style={{backgroundColor: '#f5f5f5', height: 40}}
        term={mainUser.address}
        placeholder={mainUser.addressPlaceHolder}
        errorText={mainUser.addressError}
      />
      <View style={{alignSelf: 'center'}}>
        <Button title="Submit" />
      </View>
    </View>
  );
};

export default ProfilePractice;
