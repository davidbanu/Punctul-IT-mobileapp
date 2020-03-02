import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, KeyboardAvoidingView} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export default class SignUpForm extends Component {
    render() {
        let data = [{
            value: 'Manager regional',
          }, {
            value: 'Profesor',
          }, {
            value: 'Parinte',
        },
             {
            value: 'Student'
        }
        ];

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.dropdownView}> 
                    <Dropdown label="Tipul Contului" data={data} 
                    baseColor="#FFF"
                    fontSize={20}
                    style={styles.accountType} />
                </View>
                

                <TextInput placeholder="Nume"
                placeholderTextColor="#FFF"
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input} />  

                <TextInput
                placeholder="Email"
                placeholderTextColor="#FFF"
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                style={styles.input} />

                <TextInput
                placeholder="Număr Telefon"
                placeholderTextColor="#FFF"
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input} />


                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Continuă</Text>
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
        fontFamily: 'Roboto'
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

    accountType: {
        color: '#FFF',
        fontSize: 22
    },

    dropdownView: {
        marginBottom: 30
    }
})