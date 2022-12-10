import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const UseStatePractice = () => {
  const [count, setCount] = useState('Fresher');
  return (
    <View>
      <View>
        <Text style={styles.Text}>{count}</Text>
      </View>
      <Button title="Click Me" onPress={() => setCount('Confirm')} />
    </View>
  );
};
export default UseStatePractice;

const styles = StyleSheet.create({
  Text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
