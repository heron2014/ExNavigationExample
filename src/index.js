import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import Router from './routes';

// disable remote debugger warning in a simulator
console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('intro')} />
      </NavigationProvider>
    )
  }
}
