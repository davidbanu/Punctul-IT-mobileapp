import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import ResetPasswordForm from '../components/ResetPasswordForm';

export default class Login extends Component {
render() {
    return (
    <KeyboardAvoidingView style={styles.container}>
        <View style={styles.formContainer}>
        <ResetPasswordForm />
        </View>
    </KeyboardAvoidingView>
    )
}

}

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