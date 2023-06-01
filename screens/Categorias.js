import React from 'react'
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoriasY from '../components/CategoriasY';
export default function Categorias() {
    const navigation = useNavigation();
    return (

        <ScrollView contentContainerStyle={styles.scrollContainer}>

            <CategoriasY navigation={navigation} />
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        height: "200%"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    seccion: {
        height: "50%",
        padding: 20,
        justifyContent: 'center',
    },
    seccion2: {
        height: "100%",
    },
    texto: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 35,
    },
});