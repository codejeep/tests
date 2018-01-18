import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login/Login';
import Home from './Home/Home';

const AppNavigator = StackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home},
  },
  {
    index: 0,
    initialRouteName: "Home",
    // headerMode: "none"
  }
);

export default AppNavigator