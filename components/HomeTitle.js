import React from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
export default function HomeTitle(props) {
    const navigation = useNavigation()
    return (
        <View style={styles.seccionTitles}>
            <Text style={styles.subtitle}>ELEMENTOS DE APTITUD</Text>
            <Text style={styles.title}>Da forma a tu cuerpo Ideal</Text>
            <Text style={styles.parrafo}>Aquí te ayudaremos a moldear y construir tu cuerpo ideal y vivir tu vida al máximo.</Text>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Mangas")}>

                <Text style={styles.subtitle}>Empezar</Text>

            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({


    seccionTitles: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    subtitle: {
        fontSize: 13,
        color: '#fff'
    },
    title: {
        fontSize: 23,
        color: '#fff'
    },
    parrafo: {
        fontSize: 14,
        color: '#fff'
    },
    boton: {
        width: 290,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        overflow: 'hidden',
        backgroundColor: '#000',
        marginTop: 10
    },
    gradient: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
    },
    texto: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
});

