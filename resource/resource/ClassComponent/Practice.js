import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import styles from './PracticeStyleSheet';

class ClassComponentPractice extends Component {
  render() {
    return (
      <>
        <View>
          <Text style= {styles.Text}>Class Component</Text>
        </View>
        <View style= {styles.Button}>
          <Button title="Press Me" onPress={()=>{alert("Class Component")}} />
        </View>
      </>
    );
  }
}

export default ClassComponentPractice;
