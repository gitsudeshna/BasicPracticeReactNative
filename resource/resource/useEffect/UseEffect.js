/* eslint-disable react-native/no-inline-styles */
// its used when we want to use our life cycle method in your functional component.
// it will cover 3 life cycle component (Mounting, Updating, and Unmounting.)

import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import UseEffectPrac from './UseEffectPractice';

const UseEffect = () => {
  // let defaultvalue = 'initial data';
  const [count, setCount] = useState(1);
  const [data, setData] = useState('defaultvalue');

  useEffect(() => {
    //works like a component
    // console.warn('Test useEffect', count);
    if (count === 5) {
      setData('its Five');
    } else if (count === 6) {
      setData('its Six');
    } else {
      setData('defaultvalue');
    }
  });

  return (
    <View>
      <Text style={{fontSize: 30}}>Use Effect Using State:-</Text>
      <Text style={{fontSize: 30}}>{count}</Text>
      <Text style={{fontSize: 30}}>{data}</Text>
      <Button
        title="Update state"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <UseEffectPrac data={count} />
    </View>
  );
};
export default UseEffect;
