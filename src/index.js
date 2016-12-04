import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from '@exponent/ex-navigation';
import { Provider } from 'react-redux';
import Router from './routes';
import Store from './store';

// disable remote debugger warning in a simulator
console.disableYellowBox = true;

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
});

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation initialRoute={Router.getRoute('intro')} />
        </NavigationProvider>
      </Provider>

    )
  }
}
