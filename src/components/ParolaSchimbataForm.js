import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, KeyboardAvoidingView} from 'react-native';

export default class ParolaSchimbataForm extends Component {
    render() {
            return (
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <Text style={styles.title}>Parola ta a fost schimbată!</Text>


                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Conectează-te</Text>
                    </TouchableOpacity>
                </View>
            )
     }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 20
    },

    buttonContainer: {
        marginTop: 30,
        borderRadius: 30,
        paddingVertical: 10,
        borderWidth: 1.2,
        borderColor: '#FFF'

    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 22,
        fontFamily: 'Roboto'
    },

    title: {
        flexGrow: 1,
        padding: 20,
        marginTop: 100,
        marginBottom: 100,
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '500',
        fontSize: 32,
        fontFamily: 'Roboto'
    }
})