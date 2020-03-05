import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
import userData from '../assets/exampleUserData.json';

export default class ParolaSetariComponent extends Component {
    render() {
            return (
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" />
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
            )
     }
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
        marginTop: 40,
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