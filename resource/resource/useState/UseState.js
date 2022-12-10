import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
const UseState = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click Me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default UseState;

// import React, {useState} from 'react';
// import {View, Text, Button} from 'react-native';
// const UseState = () => {
//   const [count, setCount] = useState(0);
//   const incre = () => {
//     setCount(count + 1);
//     console.log('daata', count);
//     alert(count);
//   };
//   return (
//     <View>
//       <Text>You clicked {count} times</Text>
//       <Button title="Click Me" onPress={incre} />
//     </View>
//   );
// };

// export default UseState;
