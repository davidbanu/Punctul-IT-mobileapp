import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';



function LoginForm () {
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
                    <TextInput
                    placeholder="Parolă"
                    placeholderTextColor="#FFF"
                    secureTextEntry
                    returnKeyType="go"
                    style={styles.input} />
                    <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                        <Text style={styles.parolaUitata}>
                         Ai uitat parola ?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} 
                    onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Conectează-te</Text>
                    </TouchableOpacity>
                </View>
    
    );
}



const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 20
    },

    input: {
        height: 40,
        marginBottom: 20,
        color: '#FFF', 
        paddingHorizontal:10,
        borderRadius: 10,
        borderWidth: 1.2,
        borderColor: '#FFF',
        fontSize: 20,
        padding: 5,
        fontFamily: 'Roboto'
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
        fontFamily: 'Roboto'
    },

    parolaUitata: {
        textAlign: 'center',
        color: '#FFF',
        fontFamily:  'Roboto',
        fontSize: 22,
        fontWeight: '500',
        margin: 30
    }
})

export default LoginForm;