import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, Image} from 'react-native';
import userData from '../assets/exampleUserData.json';
import { useNavigation } from '@react-navigation/core';



function ContulMeuComponent() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.title}>Contul Meu</Text>  
            <View style={styles.innerSettingsContainer}>
                <TouchableOpacity style={styles.tipContLabel}>
                     <Text style={styles.labels}>Tip cont: {userData.accountType} </Text> 
                </TouchableOpacity>
            </View>
            <TextInput
                    placeholder="Nume"
                    placeholderTextColor="#FFF"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={userData.username}
                    style={styles.input} />
            <TextInput
                    placeholder="Numar Telefon"
                    placeholderTextColor="#FFF"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={userData.telefon}
                    style={styles.input} />

            <TouchableOpacity style={styles.buttonContainer} 
                onPress={() => navigation.navigate('Setari')}>
                <Text style={styles.buttonText}>Salvează</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    tipContLabel: {
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 20
    },

    container: {
        padding: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        fontWeight: '100',
        color: 'grey'
    },

    buttonContainer: {
        marginTop: 50,
        borderRadius: 30,
        paddingVertical: 10,
        borderWidth: 1.2,
        borderColor: '#FFF',
        width: 200,
        alignContent: 'center'

    },

    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 22,
        fontFamily: 'Roboto'
    },

    labels: {
        color: '#334856',
        fontSize: 18
    },

    title: {
        marginTop: 40,
        textAlign: 'left',
        marginBottom: 10,
        fontSize: 38,
        fontWeight: '500',
        fontFamily: 'Roboto',
        color: '#FFF',
        alignContent: 'center',
        alignItems: 'center'
    },

    innerSettingsContainer: {
        backgroundColor: '#FFF',
        borderRadius: 20 / 2,
        width: '100%',
        marginTop: 40
    },

    input: {
        height: 40,
        marginTop: 20,
        color: '#FFF', 
        paddingHorizontal:10,
        borderRadius: 10,
        borderWidth: 1.2,
        borderColor: '#FFF',
        fontSize: 20,
        padding: 5,
        fontFamily: 'Roboto',
        width: '100%'
    },
});

export default ContulMeuComponent;