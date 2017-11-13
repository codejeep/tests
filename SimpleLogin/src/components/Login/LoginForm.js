import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Linking,
    Alert
} from 'react-native';

export default class LoginForm extends Component {
    render () {
        return (            
            <View style={styles.container}>
                <TextInput
                 underlineColorAndroid='transparent'
                 placeholder="Email or Phone"
                 style={styles.input}
                 keyboardType="email-address"
                 autoCapitalize="none"
                 autoCorrect={false}
                 onSubmitEditing={() => this.password.focus()}
                 onChangeText= {(usernameInput) => { this.username = usernameInput }}>
                </TextInput>
                <TextInput
                 underlineColorAndroid='transparent'
                 placeholder="Password"
                 style={styles.input}
                 secureTextEntry
                 onChangeText= {(passwordInput) => { this.password = passwordInput }}>
                </TextInput>
                <Text style={styles.link}
                 onPress={() => Linking.openURL('https://www.google.com')}>
                 Forgot Password?
                </Text>
                <TouchableOpacity
                 style={styles.buttonContainer}
                 onPress={() => this.validateCreds()}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </View>
        );
    }

    validateCreds() {
        if ((this.username == "test") && (this.password == "test")) {
            Alert.alert("Login succesfull!");
        } else {
            Alert.alert("Error!");
        }
        
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    bodyText: {
        color: '#FFF'
    },
    input: {
        height: 40,
        backgroundColor: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    link: {
        color: '#FFF',
        textAlign: 'right',
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#1e6cff',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF'
    }
});