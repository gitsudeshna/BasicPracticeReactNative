import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
const UseStateuseEffect = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(10);

  useEffect(() => {
    setInterval(() => {
      setCount(count * 2);
    }, 1000);
  });
  return (
    <View>
      <Text>Count Incremented {count} times</Text>
    </View>
  );
};

export default UseStateuseEffect;
