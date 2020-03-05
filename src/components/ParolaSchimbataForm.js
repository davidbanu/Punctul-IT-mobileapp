import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, KeyboardAvoidingView} from 'react-native';

import { useNavigation } from '@react-navigation/core';


function ParolaSchimbataForm () {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.title}>Parola ta a fost schimbată!</Text>


            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Conectează-te</Text>
            </TouchableOpacity>
        </View>
    )
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
        fontFamily: 'Muli-Regular'
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
        fontFamily: 'Muli-Regular'
    }
})

export default ParolaSchimbataForm;