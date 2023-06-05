import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoriasY from '../components/CategoriasY';
import Header from '../components/Header';

export default function Categorias() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <CategoriasY navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
});
