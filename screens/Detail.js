import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { ejerciciosData } from '../components/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Timer from '../components/Timer';
import Header from '../components/Header';
import { Dialog } from "react-native-popup-dialog";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Detail({ route }) {
    const [showAlert, setShowAlert] = useState(false);

    const { exerciseId } = route.params;
    const exercise = ejerciciosData.find((exercise) => exercise.id === exerciseId);
    const [isFavorite, setIsFavorite] = useState(false);
    const [calories, setCalories] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const toggleFavorite = async () => {
        try {
            const favorites = await AsyncStorage.getItem('favorites');
            let favoritesArray = favorites ? JSON.parse(favorites) : [];

            // Check if exercise is already in favorites
            const exerciseIndex = favoritesArray.findIndex((fav) => fav.id === exercise.id);
            if (exerciseIndex === -1) {
                // Add exercise to favorites
                favoritesArray.push(exercise);
                await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
                setIsFavorite(true);
                setShowAlert(true);

            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
            }
        } catch (error) {
            console.log('Error toggling favorite:', error);
        }
    };


    useEffect(() => {
        const randomCalories = Math.floor(Math.random() * 70 + 20); // Genera un número entre 100 y 600
        setCalories(randomCalories);
        const randomMinutes = Math.floor(Math.random() * 15 + 2); // Genera un número entre 100 y 600
        setMinutes(randomMinutes);
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} >
            <Header />
            <Image source={{ uri: exercise.img }} style={styles.exerciseImage}>

            </Image>
            <View style={styles.seccion}>
                <View style={styles.timeCaloriCard}>
                    <View style={styles.timeCalori}>
                        <MaterialCommunityIcons name="timer" size={24} color='#D71920' style={styles.icon} />
                        <View>
                            <Text style={styles.timeCaloriText2}>Tiempo </Text>
                            <Text style={styles.timeCaloriText}>{minutes} min </Text>
                        </View>
                    </View>
                    <View style={styles.timeCalori}>
                        <Ionicons name="fitness" size={24} color='#D71920' style={styles.icon} />
                        <View>
                            <Text style={styles.timeCaloriText2}>Calorias </Text>
                            <Text style={styles.timeCaloriText}>{calories} cal</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.iconTexto2}>
                    <Ionicons name="checkmark-circle" size={23} color='#D71920' />
                    <Text style={styles.title}> {exercise.title}</Text>
                </View>
                <View style={styles.iconTexto2}>
                </View>

                <ScrollView>
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
                </ScrollView>
                <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
                    <Text style={styles.favoriteButtonText}>Añadir aFavoritos  </Text>
                    <MaterialIcons name="favorite" size={24} color='#ffff' />
                </TouchableOpacity>

                <Text style={styles.description}>{exercise.description}</Text>
                <View>

                    {exercise.consejo1 !== '' && <View style={styles.iconTexto}>
                        <Ionicons name="checkmark-circle" size={20} color='#D71920' />
                        <Text style={styles.TextIcon}>  Consejo de entrenamiento:</Text>
                    </View>}

                    {exercise.consejo1 !== '' && <Text style={styles.pasos}>1- {exercise.consejo1}</Text>}
                    {exercise.consejo2 !== '' && <Text style={styles.pasos}>2- {exercise.consejo2}</Text>}
                    {exercise.consejo3 !== '' && <Text style={styles.pasos}>3- {exercise.consejo3}</Text>}
                    {exercise.consejo4 !== '' && <Text style={styles.pasos}>4- {exercise.consejo4}</Text>}
                    {exercise.consejo5 !== '' && <Text style={styles.pasos}>5- {exercise.consejo5}</Text>}

                </View>
            </View>
            <Dialog
                visible={showAlert}
                onTouchOutside={() => setShowAlert(false)}
            >
                <View style={styles.agregado}>
                    <Text>¡Agregado a favoritos!</Text>
                </View>
            </Dialog>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        height: '300%',
        backgroundColor: '#fff',
        paddingTop: 50,
    },

    seccion: {
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#F0F0F0',
        marginTop: 70,
        borderRadius: 30
    },
    title: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    timeCaloriCard: {
        backgroundColor: '#D71920',
        borderRadius: 20,
        height: 80,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: -70,
        shadowColor: 'rgba(215, 25, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    },
    timeCalori: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    timeCaloriText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    timeCaloriText2: {
        color: '#fff',
        fontSize: 13,

    },
    icon: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 100,
    },
    description: {
        color: '#000',
        fontSize: 15,
        marginBottom: 10,
        textAlign: 'center',
        paddingTop: 30
    },
    category: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: 'rgba(215, 25, 0, 0.8)',
        padding: 6,
        borderRadius: 100,
        width: 100,
        height: 30,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',


    },
    exerciseImage: {
        width: '100%',
        height: 300,
        alignSelf: 'center',
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#fff',
        objectFit: 'contain',

    },
    iconTexto: {
        color: '#000',
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
    iconTexto2: {
        color: '#000',
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20,
    },

    TextIcon: {
        fontSize: 15,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    favoriteButton: {
        backgroundColor: '#D71920',
        borderRadius: 8,
        padding: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    favoriteButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    pasos: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        color: '#000',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 2,
        fontSize: 13
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

    agregado: {

        padding: 20,




    },
});

