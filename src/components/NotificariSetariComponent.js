import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import userData from '../assets/exampleUserData.json';

function  NotificariSetariComponent () {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <StatusBar barStyle="light-content" />
                <Text style={styles.title}>Notificări</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Notificari Push')}>
                    <Text style={styles.textLabel}>Notificări Push</Text> 
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=> navigation.navigate('Notificari Email')}>
                    <Text style={styles.textLabel}>Notificări Email</Text> 
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

    title: {
        marginTop: 40,
        marginLeft: 10,
        marginBottom: 40,
        fontSize: 38,
        fontWeight: '500',
        fontFamily: 'Muli-Regular',
        color: '#FFF'
    },

    textLabel: {
        fontSize: 22,
        marginLeft: 10,
        fontFamily: 'Muli-Regular',
        color: '#FFF',
        marginBottom: 10
    }
})

export default NotificariSetariComponent;