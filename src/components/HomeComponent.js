import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import userData from '../assets/exampleUserData.json';

function HomeComponent() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.title}>Bună, {userData.username}!</Text>
            <View style={styles.avatarContainer}> 
                <Image style={styles.avatar} source={require('../assets/avatar.jpg')}/>
            </View>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Catalog</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => navigation.navigate('Plata')}>
                <Text style={styles.buttonText}>Plăți</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Membrii</Text>
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
        fontFamily: 'Roboto'
    },

    title: {
        flexGrow: 1,
        padding: 20,
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '500',
        fontSize: 28,
        fontFamily: 'Roboto'
    },
    
    avatarContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    avatar: {
        width: 180,
        height: 180,
        borderRadius: 400/ 2
    }
})

export default HomeComponent;