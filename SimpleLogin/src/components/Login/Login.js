import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
import LoginForm from './LoginForm'

export default class Login extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.LogoContainer}>
                    <Image
                     style={styles.logo}
                     source={require('../../images/fox.png')}>
                    </Image>

                    <Text style={styles.title}>Login by codejeep</Text>
                </View>
                <View style={styles.FormContainer}>
                    <LoginForm></LoginForm>
                </View>            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2124ff'
    },
    LogoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 120,
        height: 120
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        fontWeight: 'bold',
        opacity: 0.8
    }
});