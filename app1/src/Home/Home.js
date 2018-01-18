import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from "react-navigation";

export default class Login extends Component {
    static navigationOptions = {
      title: 'Home',
    };
    render() {
      return (
        <View>
        <Text>I'm home!</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Login', {test: "test"})}
          title='home'
        />
      </View>
      );
    }
  }