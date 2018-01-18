import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Provider, connect } from 'react-redux';
import { increment, decrement } from './actions/index';
import { COUNTER_INC, COUNTER_DEC } from './redux/constants'



export class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.props.increment} title="Increase Count"></Button>
        <Text>{this.props.count}</Text>
        <Button onPress={this.props.decrement} title="Decrease Count"></Button>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.counterReducer.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

// Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Counter)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
