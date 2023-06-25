import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, ScrollView, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { ejerciciosData } from '../components/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Timer from '../components/Timer';
import Header from '../components/Header';
import { Dialog } from "react-native-popup-dialog";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import tilde from '../assets/tilde.png'
import { color } from '@rneui/themed/dist/config';
export default function Detail({ route }) {
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertError, setShowAlertError] = useState(false);
    const [showAlertRutina, setShowAlertRutina] = useState(false);
    const { exerciseId } = route.params;
    const exercise = ejerciciosData.find((exercise) => exercise.id === exerciseId);
    const [isFavorite, setIsFavorite] = useState(false);
    const [calories, setCalories] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isRutine, setIsRutine] = useState(false);
    const [isRutineDia2, setIsRutineDia2] = useState(false);
    const [isRutineDia3, setIsRutineDia3] = useState(false);
    const [isRutineDia4, setIsRutineDia4] = useState(false);
    const [isRutineDia5, setIsRutineDia5] = useState(false);
    const [isRutineDia6, setIsRutineDia6] = useState(false);
    const [isRutineDia7, setIsRutineDia7] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
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
                setShowAlertError(true);
            }
        } catch (error) {
            console.log('Error toggling favorite:', error);
        }
    };

    const toggleRuitine = async () => {
        try {
            const favorites = await AsyncStorage.getItem('Dia1');
            let favoritesArray = favorites ? JSON.parse(favorites) : [];

            // Check if exercise is already in favorites
            const exerciseIndex = favoritesArray.findIndex((fav) => fav.id === exercise.id);
            if (exerciseIndex === -1) {
                // Add exercise to favorites
                favoritesArray.push(exercise);
                await AsyncStorage.setItem('Dia1', JSON.stringify(favoritesArray));
                setIsRutine(true);
                setShowAlertRutina(true);
                setModalVisible(false);
            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
                setShowAlertError(true);
                setModalVisible(false);
            }
        } catch (error) {
            console.log('Error toggling Rutine:', error);

        }
    };

    const toggleRuitineDia2 = async () => {
        try {
            const favorites = await AsyncStorage.getItem('Dia2');
            let favoritesArray = favorites ? JSON.parse(favorites) : [];

            // Check if exercise is already in favorites
            const exerciseIndex = favoritesArray.findIndex((fav) => fav.id === exercise.id);
            if (exerciseIndex === -1) {
                // Add exercise to favorites
                favoritesArray.push(exercise);
                await AsyncStorage.setItem('Dia2', JSON.stringify(favoritesArray));
                setIsRutineDia2(true);
                setShowAlertRutina(true);
                setModalVisible(false);
            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
                setShowAlertError(true);
                setModalVisible(false);
            }
        } catch (error) {
            console.log('Error toggling Rutine:', error);
        }
    };

    const toggleRuitineDia3 = async () => {
        try {
            const favorites = await AsyncStorage.getItem('Dia3');
            let favoritesArray = favorites ? JSON.parse(favorites) : [];

            // Check if exercise is already in favorites
            const exerciseIndex = favoritesArray.findIndex((fav) => fav.id === exercise.id);
            if (exerciseIndex === -1) {
                // Add exercise to favorites
                favoritesArray.push(exercise);
                await AsyncStorage.setItem('Dia3', JSON.stringify(favoritesArray));
                setIsRutineDia3(true);
                setShowAlertRutina(true);
                setModalVisible(false);
            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
                setShowAlertError(true);
                setModalVisible(false);
            }
        } catch (error) {
            console.log('Error toggling Rutine:', error);
        }
    };
    const toggleRuitineDia4 = async () => {
        try {
            const favorites = await AsyncStorage.getItem('Dia4');
            let favoritesArray = favorites ? JSON.parse(favorites) : [];

            // Check if exercise is already in favorites
            const exerciseIndex = favoritesArray.findIndex((fav) => fav.id === exercise.id);
            if (exerciseIndex === -1) {
                // Add exercise to favorites
                favoritesArray.push(exercise);
                await AsyncStorage.setItem('Dia4', JSON.stringify(favoritesArray));
                setIsRutineDia4(true);
                setShowAlertRutina(true);
                setModalVisible(false);
            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
                setShowAlertError(true);
                setModalVisible(false);
            }
        } catch (error) {
            console.log('Error toggling Rutine:', error);
        }
    };
    const toggleRuitineDia5 = async () => {
        try {
            const favorites = await AsyncStorage.getItem('Dia5');
            let favoritesArray = favorites ? JSON.parse(favorites) : [];

            // Check if exercise is already in favorites
            const exerciseIndex = favoritesArray.findIndex((fav) => fav.id === exercise.id);
            if (exerciseIndex === -1) {
                // Add exercise to favorites
                favoritesArray.push(exercise);
                await AsyncStorage.setItem('Dia5', JSON.stringify(favoritesArray));
                setIsRutineDia5(true);
                setShowAlertRutina(true);
                setModalVisible(false);
            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
                setShowAlertError(true);
                setModalVisible(false);
            }
        } catch (error) {
            console.log('Error toggling Rutine:', error);
        }
    };

    const toggleRuitineDia6 = async () => {
        try {
            const favorites = await AsyncStorage.getItem('Dia6');
            let favoritesArray = favorites ? JSON.parse(favorites) : [];

            // Check if exercise is already in favorites
            const exerciseIndex = favoritesArray.findIndex((fav) => fav.id === exercise.id);
            if (exerciseIndex === -1) {
                // Add exercise to favorites
                favoritesArray.push(exercise);
                await AsyncStorage.setItem('Dia6', JSON.stringify(favoritesArray));
                setIsRutineDia6(true);
                setShowAlertRutina(true);
                setModalVisible(false);
            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
                setShowAlertError(true);
                setModalVisible(false);
            }
        } catch (error) {
            console.log('Error toggling Rutine:', error);
        }
    };
    const toggleRuitineDia7 = async () => {
        try {
            const favorites = await AsyncStorage.getItem('Dia7');
            let favoritesArray = favorites ? JSON.parse(favorites) : [];

            // Check if exercise is already in favorites
            const exerciseIndex = favoritesArray.findIndex((fav) => fav.id === exercise.id);
            if (exerciseIndex === -1) {
                // Add exercise to favorites
                favoritesArray.push(exercise);
                await AsyncStorage.setItem('Dia7', JSON.stringify(favoritesArray));
                setIsRutineDia7(true);
                setShowAlertRutina(true);
                setModalVisible(false);
            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
                setShowAlertError(true);
                setModalVisible(false);
            }
        } catch (error) {
            console.log('Error toggling Rutine:', error);
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
                    <Image source={tilde} style={{ width: 23, height: 23 }} />
                    <Text style={styles.title}> {exercise.title}</Text>
                </View>
                <View style={styles.iconTexto2}>
                </View>

                <ScrollView>
                    {exercise.paso1 !== '' && <View style={styles.pasos}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.pasosText}>{exercise.paso1}</Text>
                    </View>}
                    {exercise.paso2 !== '' && <View style={styles.pasos}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.pasosText}>{exercise.paso2}</Text>
                    </View>}
                    {exercise.paso3 !== '' && <View style={styles.pasos}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.pasosText}>{exercise.paso3}</Text>
                    </View>}
                    {exercise.paso4 !== '' && <View style={styles.pasos}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.pasosText}>{exercise.paso4}</Text>
                    </View>}
                    {exercise.paso5 !== '' && <View style={styles.pasos}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.pasosText}>{exercise.paso5}</Text>
                    </View>}
                    {exercise.paso6 !== '' && <View style={styles.pasos}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.pasosText}>{exercise.paso6}</Text>
                    </View>}
                    {exercise.paso7 !== '' && <View style={styles.pasos}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.pasosText}>{exercise.paso7}</Text>
                    </View>}
                    {exercise.paso8 !== '' && <View style={styles.pasos}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.pasosText}>{exercise.paso8}</Text>
                    </View>}
                    {exercise.paso9 !== '' && <View style={styles.pasos}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.pasosText}>{exercise.paso9}</Text>
                    </View>}
                    {exercise.paso10 !== '' && <View style={styles.pasos}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.pasosText}>{exercise.paso10}</Text>
                    </View>}
                </ScrollView>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={openModal} style={styles.favoriteButton}>
                        <Text style={styles.favoriteButtonText}>Añadir a Rutina   </Text>
                        <MaterialCommunityIcons name="timer" size={20} color='#ffff' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
                        <Text style={styles.favoriteButtonText}>Añadir a Favorito </Text>
                        <MaterialIcons name="favorite" size={20} color='#ffff' />
                    </TouchableOpacity>
                </View>

                <Modal visible={modalVisible} animationType="slide"  >

                    <View style={styles.ContentModal}>

                        <View style={styles.Modal}>
                            <TouchableOpacity onPress={closeModal}>
                                <Text style={styles.closeModal}>X</Text>
                            </TouchableOpacity>

                            <View style={styles.Rutines}>
                                <TouchableOpacity onPress={toggleRuitine} style={styles.RutinaButton}>
                                    <Text style={styles.diaButon}>Día 1</Text>
                                    <MaterialCommunityIcons name="timer" size={20} color='#000' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={toggleRuitineDia2} style={styles.RutinaButton}>
                                    <Text style={styles.diaButon}>Día 2</Text>
                                    <MaterialCommunityIcons name="timer" size={20} color='#000' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={toggleRuitineDia3} style={styles.RutinaButton}>
                                    <Text style={styles.diaButon}>Día 3</Text>
                                    <MaterialCommunityIcons name="timer" size={20} color='#000' />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={toggleRuitineDia4} style={styles.RutinaButton}>
                                    <Text style={styles.diaButon}>Día 4</Text>
                                    <MaterialCommunityIcons name="timer" size={20} color='#000' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={toggleRuitineDia5} style={styles.RutinaButton}>
                                    <Text style={styles.diaButon}>Día 5</Text>
                                    <MaterialCommunityIcons name="timer" size={20} color='#000' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={toggleRuitineDia6} style={styles.RutinaButton}>
                                    <Text style={styles.diaButon}>Día 6</Text>
                                    <MaterialCommunityIcons name="timer" size={20} color='#000' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={toggleRuitineDia7} style={styles.RutinaButton}>
                                    <Text style={styles.diaButon}>Día 7</Text>
                                    <MaterialCommunityIcons name="timer" size={20} color='#000' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>


                <Text style={styles.description}>{exercise.description}</Text>
                <View>
                    {exercise.consejo1 !== '' && <View style={styles.iconTexto}>
                        <Text style={styles.TextIcon}>  Consejo de entrenamiento:</Text>
                    </View>}

                    {exercise.consejo1 !== '' && <View style={styles.pasos}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.pasosText}>{exercise.consejo1}</Text>
                    </View>}
                    {exercise.consejo2 !== '' && <View style={styles.pasos}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.pasosText}>{exercise.consejo2}</Text>
                    </View>}
                    {exercise.consejo3 !== '' && <View style={styles.pasos}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.pasosText}>{exercise.consejo2}</Text>
                    </View>}
                    {exercise.consejo4 !== '' && <View style={styles.pasos}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.pasosText}>{exercise.consejo3}</Text>
                    </View>}
                    {exercise.consejo5 !== '' && <View style={styles.pasos}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.pasosText}>{exercise.consejo4}</Text>
                    </View>}

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

            <Dialog
                visible={showAlertRutina}
                onTouchOutside={() => setShowAlertRutina(false)}
            >
                <View style={styles.agregado}>
                    <Text>¡Agregado a la Rutina!</Text>
                </View>
            </Dialog>
            <Dialog
                visible={showAlertError}
                onTouchOutside={() => setShowAlertError(false)}
            >
                <View style={styles.agregado}>
                    <Text>¡Error! Ya esta agregado</Text>
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
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#F9F9F9',
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
        color: 'rgba(0, 0, 0, 0.7)',
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
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 20,
    },

    TextIcon: {
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.7)',
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
    ContentModal: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    btns: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        width: '100%'
    },
    Modal: {
        padding: 20,
        backgroundColor: '#D71920',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 200
    },
    closeModal: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'right',
        padding: 10,
        fontWeight: 'bold'
    },
    RutinaButton: {
        backgroundColor: '#ffff',
        borderRadius: 10,
        padding: 10,
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    diaButon: {
        color: '#000',
        fontSize: 16,
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
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 1,
        fontSize: 13,
        gap: 5
    },
    pasosText: {
        color: 'rgba(0, 0, 0, 0.7)',
        width: '95%',
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

    Rutines: {
        gap: 10,
    }
});

