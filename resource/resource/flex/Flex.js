/* eslint-disable react-native/no-inline-styles */

// Flex:- It will give responssive UI(height, width) for all devices.
// alignItem: flex-start, center, baseline, flex-end, stretch
// flexDirection: row, column, column-reverse, row-reverse
// flexWrap: wrap, nowrap, wrap-reverse
// justifyContent: flex-start, center, flex-end, space-around, space-between, space-evenly

import React from 'react';
import {View} from 'react-native';

const Flex = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      <View style={{width: 120, height: 120, backgroundColor: 'green'}} />
      <View style={{width: 120, height: 120, backgroundColor: 'yellow'}} />
      <View style={{width: 120, height: 120, backgroundColor: 'skyblue'}} />
      <View style={{width: 120, height: 120, backgroundColor: 'red'}} />
      <View style={{width: 120, height: 120, backgroundColor: 'blue'}} />
      <View style={{width: 120, height: 120, backgroundColor: 'pink'}} />
    </View>
  );
};
export default Flex;
