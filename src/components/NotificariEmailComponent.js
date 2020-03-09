import React, { Component } from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import userData from '../assets/exampleUserData.json';

function  NotificariEmailComponent () {


    let state = {
        notificariPlati: true,
        notificariFeed: true,
        notificariPrezente: true,
        notificariMedalii: true, 
        notificariStiri: true
    }


    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <StatusBar barStyle="light-content" />
                <Icon name="ios-arrow-round-back" size={40} style={styles.back} color="#FFF" />
                <Text style={styles.title}>Notificări Email</Text>
                <View style={styles.rows}>
                     <Text style={styles.textLabel}>Notificări Plăți</Text>
                     <Switch 
                     onValueChange={(value)=> this.setState({notificariPlati: value}).bind(this)}
                     trackColor={{true:'green', false: 'grey'}}
                     style={styles.switch}
                     value={state.notifariPlati}/> 
                </View>
                <View style={styles.rows}>
                    <Text style={styles.textLabel}>Notificări Feedback</Text>
                    <Switch 
                     trackColor={{true:'green', false: 'grey'}}
                     style={styles.switch}
                     value={true}/> 
                </View>
                <View style={styles.rows}>
                    <Text style={styles.textLabel}>Notificări Prezență</Text>
                    <Switch 
                     trackColor={{true:'green', false: 'grey'}}
                     style={styles.switch}
                     value={false}/>
                </View>
                <View style={styles.rows}>
                    <Text style={styles.textLabel}>Notificări Medalii</Text>
                    <Switch 
                     trackColor={{true:'green', false: 'grey'}}
                     style={styles.switch}
                     value={true}/>
                </View>
                <View style={styles.rows}>
                    <Text style={styles.textLabel}>Notificări Știri</Text>
                    <Switch 
                     trackColor={{true:'green', false: 'grey'}}
                     style={styles.switch}
                     value={true}/>  
                </View>
                                     
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

    title: {
        marginTop: 10,
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
    },

    rows: {
        flexDirection: 'row'
    },

    switch: {
        marginBottom: 5
    }
})

export default NotificariEmailComponent;