import React, { Component } from 'react';
import  {StyleSheet, View, TouchableOpacity, Text, StatusBar, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import userData from '../assets/exampleUserData.json';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeComponent() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Icon name="ios-menu" size={40} style={styles.menu} color="#FFF" />
            <Text style={styles.title}>Bună, {userData.firstName}!</Text>
            <View style={styles.avatarContainer}> 
                <Image style={styles.avatar} source={require('../assets/avatar.jpg')}/>
            </View>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => navigation.navigate('Catalog')}>
                <Text style={styles.buttonText}>Catalog</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => navigation.navigate('Plata')}>
                <Text style={styles.buttonText}>Plăți</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={() => navigation.navigate('Membrii')}>
                <Text style={styles.buttonText}>Membrii</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        marginLeft: 10,
        marginTop: 10
    }, 

    container: {
        padding: 10,
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
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '500',
        fontSize: 28,
        fontFamily: 'Muli-Regular'
    },
    
    avatarContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center', 
        marginBottom: 40
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 400/ 2
    }
})

export default HomeComponent;