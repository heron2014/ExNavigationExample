import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Router from '../routes';

export default class Intro extends Component {

  _goToTabs = () => {
    this.props.navigator.push(Router.getRoute('tabs'));
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>IntroScreen!</Text>
        <Text onPress={this._goToTabs}>
          Go to Tabs Page
        </Text>
      </View>
    )
  }
}
