import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, AppRegistry} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginForm from '../components/LoginForm';


const Login = () => (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
            </View>
            <View style={styles.formContainer}>
            <LoginForm/>
            </View>
        </KeyboardAvoidingView>

);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(50, 163, 220, 1)'
    },
    logoContainer: {
        marginTop: 40,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    }

});

export default Login;