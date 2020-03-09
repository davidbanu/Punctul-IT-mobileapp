import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

function ResetPasswordForm () {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="ios-arrow-round-back" size={40} style={styles.back} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.title}>Resetează Parola</Text>
            <TextInput
             placeholder="Parolă"
             placeholderTextColor="#FFF"
             secureTextEntry
             returnKeyType="go"
             style={styles.input} />
            <TextInput
            placeholder="Confirmă Parola"
            placeholderTextColor="#FFF"
            secureTextEntry
            returnKeyType="go"
            style={styles.input} />
            <TouchableOpacity style={styles.buttonContainer} 
            onPress={() => navigation.navigate('Parola Schimbata')}>
                <Text style={styles.buttonText}>Resetează</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 20
    },
    input: {
        height: 40,
        marginBottom: 30,
        color: '#FFF',
        paddingHorizontal:10,
        borderRadius: 10,
        borderWidth: 1.2,
        borderColor: '#FFF',
        fontSize: 20,
        padding: 5,
        fontFamily: 'Muli-Regular'
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
        marginBottom: 100,
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '500',
        fontSize: 28,
        fontFamily: 'Muli-Regular'
    }
})

export default ResetPasswordForm;