import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView, View} from 'react-native';
import NotificariSetariComponent from '../components/NotificariSetariComponent';

export default class NotificariSetari extends Component {
    render () {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <NotificariSetariComponent />
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