import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import TrimiteEmailForm from '../components/TrimiteEmailForm';

export default class TrimiteEmail extends Component {
render() {
    return (
    <KeyboardAvoidingView style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
        </View>
        <TrimiteEmailForm />
    </KeyboardAvoidingView>
    )
}

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(50, 163, 220, 1)'
    },
    logoContainer: {
        marginTop: 40,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    }

});