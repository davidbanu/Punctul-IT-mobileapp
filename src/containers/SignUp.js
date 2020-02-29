import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import SignUpForm from '../components/SignUpForm';


export default class SignUp extends Component {

render () {
return (
    <KeyboardAvoidingView
     behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
     style={styles.container}>
        <View style={styles.inner}>
            <Text style={styles.header}> Creează Cont </Text>
            <View style={styles.formContainer}>
                <SignUpForm />
            </View>
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
    },

    header: {
        marginTop: 20,
        marginBottom: 40,
        fontSize: 38,
        fontWeight: '500',
        fontFamily: 'Roboto',
        color: '#FFF'
    },

    inner: {
        padding: 24,
        justifyContent: "flex-end",
        flex: 1
    }

});