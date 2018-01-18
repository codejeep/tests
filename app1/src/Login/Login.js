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
    title: 'Login',
  };

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>I'm login!</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          title='login'
        />
      </View>
    );
  }
}