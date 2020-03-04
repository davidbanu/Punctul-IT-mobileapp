import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView, View} from 'react-native';
import HomeComponent from '../components/HomeComponent';

export default class Home extends Component {
    render () {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
                style={styles.container}>
                <View style={styles.inner}>
                    <View style={styles.formContainer}>
                        <HomeComponent />
                    </View>
                </View>
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
