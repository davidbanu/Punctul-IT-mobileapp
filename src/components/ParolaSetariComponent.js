import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import userData from '../assets/exampleUserData.json';

function  ParolaSetariComponent () {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <StatusBar barStyle="light-content" />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="ios-arrow-round-back" size={40} style={styles.back} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.title}>Schimbă Parola</Text> 
                <Text style={styles.textLabel}>Parola Curentă</Text> 
                <TextInput
                secureTextEntry
                returnKeyType="go"
                style={styles.input} />
                <Text style={styles.textLabel}>Parola Nouă</Text>
                <TextInput
                secureTextEntry
                returnKeyType="go"
                style={styles.input} />
                <Text style={styles.textLabel}>Confirmă Parola Nouă</Text>
                <TextInput
                secureTextEntry
                returnKeyType="go"
                style={styles.input} />
                <TouchableOpacity style={styles.buttonContainer} 
                onPress={() => navigation.navigate('Setari')}>
                    <Text style={styles.buttonText}>Salvează</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 20,
        flex: 1
    },

    inner: {
        justifyContent: "flex-end",
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
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 40,
        fontSize: 38,
        fontWeight: '500',
        fontFamily: 'Muli-Regular',
        color: '#FFF'
    },

    textLabel: {
        fontSize: 21,
        fontFamily: 'Muli-Regular',
        color: '#FFF',
        marginBottom: 10
    },

    input: {
        height: 40,
        marginBottom: 20,
        fontSize: 21,
        color: '#FFF', 
        paddingHorizontal:10,
        borderRadius: 10,
        borderWidth: 1.2,
        borderColor: '#FFF',
        fontSize: 20,
        padding: 5,
        fontFamily: 'Muli-Regular'
    },
})

export default ParolaSetariComponent;