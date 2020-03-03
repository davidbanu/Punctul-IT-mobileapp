import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView, View} from 'react-native';
import CatalogComponent from '../components/CatalogComponent';

export default class Catalog extends Component {
    render () {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
                style={styles.container}>
                <View style={styles.inner}>
                    <View style={styles.formContainer}>
                        <CatalogComponent />
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