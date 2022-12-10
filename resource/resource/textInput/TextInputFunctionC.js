/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const TextInputFunctionComponent = () => {
  const [name, setName] = useState();
  const [color, setColor] = useState('red');

  return (
    <View>
      <Text>{name}</Text>
      <TextInput
        // value={name}
        style={{
          height: 50,
          fontSize: 20,
          color: 'blue',
          backgroundColor: 'pink',
        }}
        placeholder="enter something"
        placeholderTextColor="black"
        onChangeText={e => {
          setName(e);
        }}
        keyboardType="email-address" //"default" "number-pad" "decimal-pad" "numeric" "phone-pad" "url"
        autoCorrect={true}
        autoCapitalize="characters" //"sentences" "words" "none"
        underlineColorAndroid={color}
        cursorColor="green"
        editable={true}
        inlineImageLeft="user"
        maxLength={11}
        multiline={true}
        // numberOfLines={2} //3 4 5 6 7
        textAlign="center" //left right
        //secureText={true} false .....
      />
      <Button
        title="green"
        onPress={() => {
          alert(name), setColor('green'), console.log(name);
        }}
      />
    </View>
  );
};
//(e)=>{setName({name:e})}
export default TextInputFunctionComponent;
