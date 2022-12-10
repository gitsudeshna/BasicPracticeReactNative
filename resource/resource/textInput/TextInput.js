import React from 'react';
import {View, Text, TextInput} from 'react-native';

class TextInputHandling extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  render() {
    return (
      <View>
        <Text>{this.state.name}</Text>
        <TextInput
          placeholder={'Enter Name'}
          onChangeText={e => {
            this.setState({name: e});
          }}
        />
      </View>
    );
  }
}
export default TextInputHandling;
