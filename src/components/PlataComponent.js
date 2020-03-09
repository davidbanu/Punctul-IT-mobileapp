import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import userData from '../assets/exampleUserData.json';

export default class PlataComponent extends Component {
    render() {
            return (
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <Icon name="ios-arrow-round-back" size={40} style={styles.back} color="#FFF" />
                    <Text style={styles.title}>Plăți</Text>  
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
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 40,
        fontSize: 38,
        fontWeight: '500',
        fontFamily: 'Muli-Regular',
        color: '#FFF'
    }
})