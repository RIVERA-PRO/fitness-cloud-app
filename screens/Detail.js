import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { ejerciciosData } from '../components/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Timer from '../components/Timer';

export default function Detail({ route }) {
    const { exerciseId } = route.params;
    const exercise = ejerciciosData.find((exercise) => exercise.id === exerciseId);
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = async () => {
        try {
            const favorites = await AsyncStorage.getItem('favorites');
            let favoritesArray = favorites ? JSON.parse(favorites) : [];

            if (isFavorite) {
                // Remove exercise from favorites
                const exerciseIndex = favoritesArray.findIndex((fav) => fav.id === exercise.id);
                if (exerciseIndex !== -1) {
                    favoritesArray.splice(exerciseIndex, 1);
                    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
                }
            } else {
                // Add exercise to favorites
                favoritesArray.push(exercise);
                await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
            }

            setIsFavorite(!isFavorite);
        } catch (error) {
            console.log('Error toggling favorite:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <ImageBackground source={{ uri: exercise.fondo }} style={styles.backgroundImage}>
                <View style={styles.seccion}>
                    <Text style={styles.title}>{exercise.title}</Text>
                    <Text style={styles.category}>{exercise.categoria}</Text>
                    <Image source={{ uri: exercise.img }} style={styles.exerciseImage} />
                    {exercise.paso1 !== '' && <Text style={styles.pasos}>1- {exercise.paso1}</Text>}
                    {exercise.paso2 !== '' && <Text style={styles.pasos}>2- {exercise.paso2}</Text>}
                    {exercise.paso3 !== '' && <Text style={styles.pasos}>3- {exercise.paso3}</Text>}
                    {exercise.paso4 !== '' && <Text style={styles.pasos}>4- {exercise.paso4}</Text>}
                    {exercise.paso5 !== '' && <Text style={styles.pasos}>5- {exercise.paso5}</Text>}
                    {exercise.paso6 !== '' && <Text style={styles.pasos}>6- {exercise.paso6}</Text>}
                    {exercise.paso7 !== '' && <Text style={styles.pasos}>7- {exercise.paso7}</Text>}
                    {exercise.paso8 !== '' && <Text style={styles.pasos}>8- {exercise.paso8}</Text>}
                    {exercise.paso9 !== '' && <Text style={styles.pasos}>9- {exercise.paso9}</Text>}
                    {exercise.paso10 !== '' && <Text style={styles.pasos}>10- {exercise.paso10}</Text>}
                    <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
                        <Text style={styles.favoriteButtonText}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
                    </TouchableOpacity>
                    <Timer />
                    <Text style={styles.description}>{exercise.description}</Text>
                </View>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        height: '300%',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        paddingTop: 100,
    },
    seccion: {
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
    },
    category: {
        color: '#fff',
        fontSize: 16,
    },
    exerciseImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 20,
    },
    favoriteButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
    },
    favoriteButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    pasos: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
    },
    seriesContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    seriesLabel: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 5,
    },
    seriesInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    seriesButton: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 5,
        marginRight: 10,
    },
    seriesInput: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        textAlign: 'center',
    },
    repetitionsContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    repetitionsLabel: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 5,
    },
    repetitionsInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    repetitionsButton: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 5,
        marginRight: 10,
    },
    repetitionsInput: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        textAlign: 'center',
    },
});

