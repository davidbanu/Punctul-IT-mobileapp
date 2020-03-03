import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, Image} from 'react-native';
import userData from '../assets/exampleUserData.json';
import { useNavigation } from '@react-navigation/core';


function SetariComponent() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.title}>Setări</Text>  
            <View style={styles.avatarContainer}> 
                <Image style={styles.avatar} source={require('../assets/avatar.jpg')}/>
            </View>
            <View style={styles.innerSettingsContainer}>
                <TouchableOpacity style={styles.element}>
                     <Text style={styles.labels}>Generale</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.element}>
                     <Text style={styles.labels}>Parolă</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.element}
                onPress={()=> navigation.navigate('SignUp')}>
                     <Text style={styles.labels}>Creează cont</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonContainer} 
            onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Ieși</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 20,
        marginBottom: 20
    },

    element: {
        paddingBottom: 20,
        paddingLeft: 10, 
        paddingTop: 10
    },

    buttonContainer: {
        marginTop: 50,
        borderRadius: 30,
        paddingVertical: 10,
        borderWidth: 1.2,
        borderColor: '#FFF',
        justifyContent: 'center', 
        alignItems: 'center',
        width: 200,
        marginLeft: 80

    },

    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 22,
        fontFamily: 'Roboto'
    },

    labels: {
        color: 'black',
        fontSize: 18
    },

    title: {
        marginTop: 40,
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 38,
        fontWeight: '500',
        fontFamily: 'Roboto',
        color: '#FFF'
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
    },

    innerSettingsContainer: {
        backgroundColor: '#FFF',
        borderRadius: 20 / 2
    }
});

export default SetariComponent;