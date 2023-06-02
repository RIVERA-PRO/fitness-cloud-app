import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import logo from '../assets/logo.png';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.logoText}>Fitness Cloud</Text>
            </View>
            <Text style={styles.dateText}>{getCurrentDate()}</Text>
        </View>
    );
}

const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
};

const styles = StyleSheet.create({
    container: {

        paddingHorizontal: 20,
        flexDirection: 'column',
        padding: 20
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    logo: {
        width: 25,
        height: 25,

    },
    logoText: {
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold',
    },
    dateText: {
        color: '#000',
        fontSize: 13,
    },
});
