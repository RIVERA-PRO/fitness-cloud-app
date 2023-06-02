import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Timer from '../components/Timer';
import { LinearGradient } from 'expo-linear-gradient';
export default function Time({ navigation }) {
    return (


        <LinearGradient colors={['#AC1929', '#fff', '#fff',]} style={styles.scrollViewTime}>
            <View style={styles.timerContainer}>
                <Timer navigation={navigation} />
            </View>
        </LinearGradient>


    );
}

const styles = StyleSheet.create({
    scrollViewTime: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerContainer: {
        alignItems: 'center',
    },
});
