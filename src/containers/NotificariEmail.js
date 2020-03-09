import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView, View} from 'react-native';
import NotificariEmailComponent from '../components/NotificariEmailComponent';

export default class NotificariPush extends Component {
    render () {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <NotificariEmailComponent />
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