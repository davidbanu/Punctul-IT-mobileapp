import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import userData from '../assets/exampleUserData.json';
import { useNavigation } from '@react-navigation/core';


function MembriiComponent () {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="ios-arrow-round-back" size={40} style={styles.back} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.title}>Membrii</Text>  
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
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 40,
        fontSize: 38,
        fontWeight: '500',
        fontFamily: 'Muli-Regular',
        color: '#FFF'
    }
})

export default MembriiComponent;