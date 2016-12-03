import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>About screen</Text>
      </View>
    )
  }
}
