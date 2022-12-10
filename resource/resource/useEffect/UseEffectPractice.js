import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const UseEffectPrac = props => {
  useEffect(() => {
    console.log('useEffect props', props);
  });

  return (
    <View>
      <Text style={{fontSize: 30}}>Use Effect Using Props</Text>
    </View>
  );
};
export default UseEffectPrac;
