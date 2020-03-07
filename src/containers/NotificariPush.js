import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView, View} from 'react-native';
import NotificariPushComponent from '../components/NotificariPushComponent';

export default class NotificariPush extends Component {
    render () {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <NotificariPushComponent />
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