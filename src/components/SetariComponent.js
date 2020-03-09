import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, Image} from 'react-native';
import userData from '../assets/exampleUserData.json';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';


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
                <TouchableOpacity style={styles.editeazaProfilLabel}
                onPress={()=> navigation.navigate('EditeazaProfil')}>
                    <View style={styles.rows}>
                        <Text style={styles.labels}>Editează Profil </Text> 
                        <Icon name="ios-arrow-forward" size={30} color="#D3D3D3" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editeazaNotificariLabel}
                onPress={()=> navigation.navigate('NotificariSetari')}>
                    <View style={styles.rows}>
                        <Text style={styles.labels}>Editează Notificări </Text> 
                        <Icon name="ios-arrow-forward" size={30} color="#D3D3D3" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.parolaLabel}
                onPress={()=> navigation.navigate('ParolaSetari')}>
                    <View style={styles.rows}>
                        <Text style={styles.labels}>Schimbă Parola</Text>
                        <Icon name="ios-arrow-forward" size={30} color="#D3D3D3" />
                    </View> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupLabel}
                onPress={()=> navigation.navigate('SignUp')}>
                    <View style={styles.rows}>
                        <Text style={styles.labels}>Creează Cont User</Text>
                        <Icon name="ios-arrow-forward" size={30} color="#D3D3D3" />
                    </View>                    
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonContainer} 
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Ieși</Text>
            </TouchableOpacity>
            <Text style={styles.versionNumber}>Versiunea 0.0.5</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    rows: {
        flexDirection: 'row'
    },

    editeazaProfilLabel: {
        paddingBottom: 15,
        paddingLeft: 20, 
        paddingTop: 15,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 0.5
    },

    editeazaNotificariLabel: {
        paddingBottom: 15,
        paddingLeft: 20, 
        paddingTop: 10,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 0.5
    },

    parolaLabel: {
        paddingBottom: 15,
        paddingLeft: 20, 
        paddingTop: 10,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 0.5
    },

    signupLabel: {
        paddingLeft: 20, 
        paddingTop: 10,
        paddingBottom: 15
    },

    icon: {
        fontWeight: '100',
        color: 'grey'
    },

    buttonContainer: {
        marginTop: 40,
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
        fontFamily: 'Muli-Regular'
    },

    labels: {
        color: '#334856',
        fontSize: 18,
        fontFamily: 'Muli-Regular',
        fontWeight: '600'
    },

    title: {
        marginTop: 20,
        textAlign: 'left',
        marginBottom: 10,
        fontSize: 38,
        fontWeight: '500',
        fontFamily: 'Muli-Regular',
        color: '#FFF',
        alignContent: 'center',
        alignItems: 'center'
    },

    avatarContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center', 
        marginBottom: 20
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 400/ 2
    },

    innerSettingsContainer: {
        backgroundColor: '#FFF',
        borderRadius: 20 / 2,
        width: '100%'
    },

    versionNumber: {
        color: '#FFF', 
        fontSize: 16, 
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 15
    }
});

export default SetariComponent;