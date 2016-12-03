import React, { Component } from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';
import Router from '../routes';
import { Image } from 'react-native';

// Treat the TabScreen route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation
export default class TabsScreen extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="home">
        <TabItem
          id="home"
          title="Home"
          renderIcon={(isSelected) => <Image style={styles.icon} source={require('../assets/icon.png')} /> }>
          <StackNavigation
            id="home"
            navigatorUID="home"
            initialRoute={Router.getRoute('home')}
          />
        </TabItem>

        <TabItem
          id="about"
          title="About"
          renderIcon={(isSelected) => <Image style={styles.icon} source={require('../assets/icon.png')} /> }>
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>

        <TabItem
          id="profile"
          title="Profile"
          renderIcon={(isSelected) => <Image style={styles.icon} source={require('../assets/icon.png')} /> }>
          <StackNavigation
            id="profile"
            initialRoute={Router.getRoute('profile')}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

const styles = {
  icon: {
    height: 20,
    width: 20
  }
}
