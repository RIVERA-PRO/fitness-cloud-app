import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

export default function Perfil() {
    const isFocused = useIsFocused();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const getFavorites = async () => {
            try {
                const favoritesData = await AsyncStorage.getItem('favorites');
                if (favoritesData) {
                    setFavorites(JSON.parse(favoritesData));
                }
            } catch (error) {
                console.log('Error getting favorites:', error);
            }
        };

        if (isFocused) {
            getFavorites();
        }
    }, [isFocused]);

    const removeExercise = async (exerciseId) => {
        try {
            const updatedFavorites = favorites.filter((exercise) => exercise.id !== exerciseId);
            await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
        } catch (error) {
            console.log('Error removing exercise:', error);
        }
    };

    const removeAllExercises = async () => {
        try {
            await AsyncStorage.removeItem('favorites');
            setFavorites([]);
        } catch (error) {
            console.log('Error removing all exercises:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.seccion}>
                <Text>Tus ejercicios favoritos:</Text>
                {favorites.map((exercise) => (
                    <View key={exercise.id} style={styles.exerciseItem}>
                        <Text>{exercise.title}</Text>
                        <TouchableOpacity onPress={() => removeExercise(exercise.id)}>
                            <Text>Remover</Text>
                        </TouchableOpacity>
                    </View>
                ))}
                {favorites.length > 0 && (
                    <TouchableOpacity onPress={removeAllExercises}>
                        <Text>Remover todos los ejercicios</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.seccion2}></View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        height: '200%',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    seccion: {
        height: '50%',
        padding: 20,
        justifyContent: 'center',
    },
    seccion2: {
        height: '100%',
    },
    texto: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 35,
    },
    exerciseItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
});
