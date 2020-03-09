import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import SignUpForm from '../components/SignUpForm';
import Icon from 'react-native-vector-icons/Ionicons';
import userData from '../assets/exampleUserData.json';


export default class SignUp extends Component {


    render () {
        return (
            <KeyboardAvoidingView
             behavior={Platform.OS === "ios" ? "padding" : null}
                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
             style={styles.container}>
                <View>
                    <Icon name="ios-arrow-round-back" size={40} style={styles.back} color="#FFF" />
                    <Text style={styles.header} > Creează Cont </Text>
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

    header: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 40,
        fontSize: 38,
        fontWeight: '500',
        fontFamily: 'Muli-Regular',
        color: '#FFF'
    },

    back: {
        marginLeft: 10,
        marginTop: 10
    }

});