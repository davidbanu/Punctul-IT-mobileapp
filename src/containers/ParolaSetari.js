import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView, View} from 'react-native';
import ParolaSetariComponent from '../components/ParolaSetariComponent';

export default class ParolaSetari extends Component {
    render () {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <ParolaSetariComponent />
            </KeyboardAvoidingView>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(50, 163, 220, 1)'
    },
});