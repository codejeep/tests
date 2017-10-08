import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

var english_german = require('./english_german.json');

export default class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        input: '' ,
        output: ''
    };
  }

  render() {
    return (
      <View style={styles.parent}>
        <Text>
            Type something in English:
        </Text>

        <TextInput style = { styles.textInput } 
            onChangeText={(text)=>this._onTextInputChangeText(text)} 
            value={this.state.input} 
            onSubmitEditing = { this.showMeaning.bind(this) }/>
        <Text style = { styles.germanWord } >      
            {this.state.input}          
        </Text>
        <Text style = { styles.germanLabel } >
            Its German equivalent is:
        </Text>
        <Text style = { styles.germanWord } >      
            {this.state.output}          
        </Text>
      </View>
    );
  }

  _onTextInputChangeText(text) {
    //alert(text);
    this.setState({
        input : text
    })
  }
  
  showMeaning() {
    var meaning = this.state.input in english_german ? 
    english_german[this.state.input] : 
    "Not Found";

    // Update the state
    this.setState({
    output: meaning 
    });
  }
}

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
  textInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1
  },
  parent: {
      padding: 16
  },
  germanLabel: {
      marginTop: 20,
      fontWeight: 'bold'
  },
  germanWord: {
      marginTop: 15,
      fontSize: 30,
      fontStyle: 'italic'
  }
});

AppRegistry.registerComponent('Dictionary', () => Dictionary);
