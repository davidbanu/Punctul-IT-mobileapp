import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/core';

function TrimiteEmailForm () {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TextInput
            placeholder="Email"
            placeholderTextColor="#FFF"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            style={styles.input} />

            <Text style={styles.textIndicatii}> Te rog introdu în câmpul de mai sus
                  adresa ta de email, și o dată completat,
                  vei primi un email care va conține un
                  link de confirmare. </Text>

            <TouchableOpacity style={styles.buttonContainer}
            onPress={()=> navigation.navigate('ResetPassword')}>
                <Text style={styles.buttonText}>Trimite Email</Text>
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

    textIndicatii: {
        textAlign: 'center',
        color: '#FFF',
        fontFamily:  'Muli-Regular',
        fontWeight: '300',
        fontSize: 16,
        margin: 30
    }
})

export default TrimiteEmailForm;