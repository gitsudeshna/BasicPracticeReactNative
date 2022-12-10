/* eslint-disable no-alert */
import React from 'react';
import {View, Text, TextInput, ScrollView, Button} from 'react-native';

import styles from './PracticeStyleSheet';

const FunctionPractice = () => {
    function login()
    {
        alert("Login Function")
    }
  return (
    <ScrollView>
      <View>
      <Text style= {styles.Text}>Class Component</Text>
        <TextInput style={styles.textInput} />
        <View style={styles.Button}>
          <Button
            title="login"
            onPress={() => {
              // eslint-disable-next-line no-alert
              alert('Hii, its Functional Component');
            }}
          />
        </View>
        <View style={styles.Button}>
          <Button
            title="Save"
            onPress={login}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default FunctionPractice;
