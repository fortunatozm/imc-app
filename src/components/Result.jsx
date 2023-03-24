import React from 'react';
import { View, Text } from 'react-native';

export default function Result(props) {
  return (
    <View>
      <Text> { props.results } </Text>
      <Text> { props.resultsIMC } </Text>
    </View>
  )
}