import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ModalNav() {
    const navigation = useNavigation();

    const goToHome = () => {
        navigation.navigate('Home'); // Reemplaza 'Home' con el nombre de tu pantalla de inicio
    };

    const goToProfile = () => {
        navigation.navigate('Perfil'); // Reemplaza 'Perfil' con el nombre de tu pantalla de perfil
    };

    return (
        <View>
            <TouchableOpacity onPress={goToHome} style={styles.button}>
                <Text style={styles.buttonText}>Ir a Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToProfile} style={styles.button}>
                <Text style={styles.buttonText}>Ir a Perfil</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
