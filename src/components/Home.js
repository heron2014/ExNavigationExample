import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Router from '../routes';

export default class HomeScreen extends Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'Home',
      backgroundColor: '#c1d5f4'
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>HomeScreen!</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.performAction(({ tabs, stacks }) => {
              tabs('main').jumpToTab('profile');
            });
          }}>
          <Text>Go to Profile Screen Tab</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
