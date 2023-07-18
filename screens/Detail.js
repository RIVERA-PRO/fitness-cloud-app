import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, ScrollView, Text, Image, TouchableOpacity, ImageBackground, } from 'react-native';
import { ejerciciosData } from '../components/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Timer from '../components/Timer';
import Header from '../components/HeaderBlanco';
import { Dialog } from "react-native-popup-dialog";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import tilde from '../assets/tilde.png'
import { color } from '@rneui/themed/dist/config';
import imagen2 from '../assets/Cloud.png';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated, Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';
export default function Detail({ route }) {
    const navigation = useNavigation();

    const [animationValue] = useState(new Animated.Value(0));
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

    const startAnimation = () => {
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 360,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    };


    useFocusEffect(
        React.useCallback(() => {
            startAnimation();

            return () => {
                // Reinicia la animación cuando el screen pierde el foco
                animationValue.setValue(0);
            };
        }, [])
    );

    const translateX = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 0], // Inicia desde 200 unidades a la izquierda y se desplaza hacia la derecha
    });

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
                setTimeout(() => {
                    setShowAlert(false);
                }, 600);
            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
                setShowAlertError(true);
                setTimeout(() => {
                    setShowAlertError(false);
                }, 600);
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
                setTimeout(() => {
                    setShowAlertRutina(false);
                }, 600);
            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
                setShowAlertError(true);
                setTimeout(() => {
                    setShowAlertError(false);
                }, 600);
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
                setTimeout(() => {
                    setShowAlertRutina(false);
                }, 600);
                setModalVisible(false);
            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
                setShowAlertError(true);
                setTimeout(() => {
                    setShowAlertError(false);
                }, 600);
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
                setTimeout(() => {
                    setShowAlertRutina(false);
                }, 600);
                setModalVisible(false);
            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
                setShowAlertError(true);
                setTimeout(() => {
                    setShowAlertError(false);
                }, 600);
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
                setTimeout(() => {
                    setShowAlertRutina(false);
                }, 600);
                setModalVisible(false);
            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
                setShowAlertError(true);
                setTimeout(() => {
                    setShowAlertError(false);
                }, 600);
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
                setTimeout(() => {
                    setShowAlertRutina(false);
                }, 600);
                setModalVisible(false);
            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
                setShowAlertError(true);
                setTimeout(() => {
                    setShowAlertError(false);
                }, 600);
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
                setTimeout(() => {
                    setShowAlertRutina(false);
                }, 600);
                setModalVisible(false);
            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
                setShowAlertError(true);
                setTimeout(() => {
                    setShowAlertError(false);
                }, 600);
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
                setTimeout(() => {
                    setShowAlertRutina(false);
                }, 600);
                setModalVisible(false);
            } else {
                // Exercise already exists in favorites, do nothing
                setIsFavorite(false);
                setShowAlertError(true);
                setTimeout(() => {
                    setShowAlertError(false);
                }, 600);
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
    const navigateToCategory = () => {
        navigation.navigate(`${exercise.categoria}`);
    };






    return (

        <View style={styles.contenedor}>

            <LinearGradient colors={['#AC1929', '#D71920']} style={styles.header}>



                <Header />


            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContainer} >

                <LinearGradient colors={['#D71920', '#D71920']} style={styles.bgHeader}>

                </LinearGradient>
                <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>

                    <View style={styles.imageContainer} >
                        <ImageBackground source={{ uri: exercise.img }} style={styles.exerciseImage} resizeMode="contain" />
                    </View>

                    <View style={styles.iconTexto2}>
                        <Image source={tilde} style={{ width: 18, height: 18 }} />
                        <Text style={styles.title}> {exercise.title}</Text>
                    </View>
                    <TouchableOpacity onPress={navigateToCategory} style={styles.btnCategoria}>
                        <Fontisto name="angle-dobule-left" size={17} color="#D71920" />

                    </TouchableOpacity>

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
                        </View>

                        <View style={styles.pasoscontain}>
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
                        </View>
                        <View style={styles.btns}>
                            <TouchableOpacity onPress={openModal} >
                                <LinearGradient colors={['#D71920', '#D71920']} style={styles.favoriteButton}>
                                    <Text style={styles.favoriteButtonText}>Añadir a Rutina   </Text>
                                    <MaterialCommunityIcons name="timer" size={20} color='#ffff' />
                                </LinearGradient>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleFavorite} >

                                <LinearGradient colors={['#D71920', '#D71920']} style={styles.favoriteButton}>
                                    <Text style={styles.favoriteButtonText}>Añadir a Favorito </Text>
                                    <MaterialIcons name="favorite" size={20} color='#ffff' />
                                </LinearGradient>

                            </TouchableOpacity>
                        </View>

                        <Modal visible={modalVisible} animationType="slide" style={styles.modal}>

                            <View style={styles.ContentModal}>

                                <View style={styles.Modal}>
                                    <TouchableOpacity onPress={closeModal}>
                                        <Text style={styles.closeModal}>X</Text>
                                    </TouchableOpacity>

                                    <View style={styles.Rutines}>
                                        <TouchableOpacity onPress={toggleRuitine} >
                                            <LinearGradient colors={['#D71920', '#D71920', '#AC1929', '#AC1929',]} start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 0 }} style={styles.RutinaBtn}>
                                                <View style={styles.deFLex}>
                                                    <Image source={tilde} style={styles.icon2} />
                                                    <Text style={styles.RutinaText}> Dia 1</Text>

                                                </View>
                                                <AntDesign name="doubleright" size={24} color='#fff' />
                                            </LinearGradient>

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={toggleRuitineDia2} >
                                            <LinearGradient colors={['#D71920', '#D71920', '#AC1929', '#AC1929',]} start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 0 }} style={styles.RutinaBtn}>
                                                <View style={styles.deFLex}>
                                                    <Image source={tilde} style={styles.icon2} />
                                                    <Text style={styles.RutinaText}> Dia 2</Text>

                                                </View>
                                                <AntDesign name="doubleright" size={24} color='#fff' />
                                            </LinearGradient>

                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={toggleRuitineDia3}>
                                            <LinearGradient colors={['#D71920', '#D71920', '#AC1929', '#AC1929',]} start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 0 }} style={styles.RutinaBtn}>
                                                <View style={styles.deFLex}>
                                                    <Image source={tilde} style={styles.icon2} />
                                                    <Text style={styles.RutinaText}> Dia 3</Text>

                                                </View>
                                                <AntDesign name="doubleright" size={24} color='#fff' />
                                            </LinearGradient>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={toggleRuitineDia4} >
                                            <LinearGradient colors={['#D71920', '#D71920', '#AC1929', '#AC1929',]} start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 0 }} style={styles.RutinaBtn}>
                                                <View style={styles.deFLex}>
                                                    <Image source={tilde} style={styles.icon2} />
                                                    <Text style={styles.RutinaText}> Dia 4</Text>

                                                </View>
                                                <AntDesign name="doubleright" size={24} color='#fff' />
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={toggleRuitineDia5}>
                                            <LinearGradient colors={['#D71920', '#D71920', '#AC1929', '#AC1929',]} start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 0 }} style={styles.RutinaBtn}>
                                                <View style={styles.deFLex}>
                                                    <Image source={tilde} style={styles.icon2} />
                                                    <Text style={styles.RutinaText}> Dia 5</Text>

                                                </View>
                                                <AntDesign name="doubleright" size={24} color='#fff' />
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={toggleRuitineDia6} >
                                            <LinearGradient colors={['#D71920', '#D71920', '#AC1929', '#AC1929',]} start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 0 }} style={styles.RutinaBtn}>
                                                <View style={styles.deFLex}>
                                                    <Image source={tilde} style={styles.icon2} />
                                                    <Text style={styles.RutinaText}> Dia 6</Text>

                                                </View>
                                                <AntDesign name="doubleright" size={24} color='#fff' />
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={toggleRuitineDia7} >
                                            <LinearGradient colors={['#D71920', '#D71920', '#AC1929', '#AC1929',]} start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 0 }} style={styles.RutinaBtn}>
                                                <View style={styles.deFLex}>
                                                    <Image source={tilde} style={styles.icon2} />
                                                    <Text style={styles.RutinaText}> Dia 7</Text>

                                                </View>
                                                <AntDesign name="doubleright" size={24} color='#fff' />
                                            </LinearGradient>
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
                                <Text style={styles.pasosText}>{exercise.consejo3}</Text>
                            </View>}
                            {exercise.consejo4 !== '' && <View style={styles.pasos}>
                                <Image source={tilde} style={{ width: 18, height: 18 }} />
                                <Text style={styles.pasosText}>{exercise.consejo4}</Text>
                            </View>}
                            {exercise.consejo5 !== '' && <View style={styles.pasos}>
                                <Image source={tilde} style={{ width: 18, height: 18 }} />
                                <Text style={styles.pasosText}>{exercise.consejo5}</Text>
                            </View>}

                        </View>
                    </View>
                </Animated.View>
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

                <View style={styles.seccion}>

                    <Text style={styles.text}>

                    </Text>

                </View>
                <View style={styles.seccion}>

                    <Text style={styles.text}>

                    </Text>

                </View>


            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#D71920',
        paddingTop: 100,
    },

    bgHeader: {
        height: 150,
        backgroundColor: '#D71920',
        paddingTop: 50,
    },
    scrollContainer: {
        flexGrow: 1,

        backgroundColor: '#fff',



    },

    seccion: {
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: 70,
        borderRadius: 30
    },
    title: {
        color: '#000',
        fontSize: 15,
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


    },
    imageContainer: {
        flex: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 10,
        margin: 10,
        marginTop: -130
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

        margin: 10
    },

    TextIcon: {
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.7)',
    },

    favoriteButton: {

        borderRadius: 15,
        padding: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(215, 25, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    },
    ContentModal: {

        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '100%',
        justifyContent: 'flex-end'
    },
    btns: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        width: '100%',

    },
    Modal: {
        padding: 20,
        backgroundColor: '#fff',

        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    closeModal: {
        color: '#000',
        fontSize: 18,
        textAlign: 'right',
        padding: 10,
        fontWeight: 'bold'
    },
    RutinaButton: {
        backgroundColor: '#D71920',
        borderRadius: 10,
        padding: 13,
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: 'rgba(215, 25, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    },
    diaButon: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    favoriteButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    pasos: {


        marginTop: 10,
        flexDirection: 'row',

        padding: 10,
        shadowColor: 'rgba(0, 25, 0, 0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 10,
        backgroundColor: '#fff',
        fontSize: 13,
        gap: 5,
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5
    },
    pasosText: {
        color: 'rgba(0, 0, 0, 0.7)',
        width: '93%',
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
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        height: 200
    },
    header: {
        width: '100%',
        paddingTop: 50,
        borderRadius: 20,

        borderRadius: 20,
        position: 'absolute',
        zIndex: 2,
        top: 0,

    },

    btnCategoria: {
        position: 'absolute',
        zIndex: 2,
        top: -120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20
    },
    exerciseImageReacionados: {
        height: 60,
        width: 100
    },
    modal: {
        margin: 0
    },
    icon2: {
        borderRadius: 100,
        width: 20,
        height: 20
    },
    RutinaBtn: {
        backgroundColor: '#D71920',
        height: 50,
        marginHorizontal: 10,
        marginVertical: 4,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        justifyContent: 'space-between',
        borderRadius: 10,
        shadowColor: 'rgba(215, 25, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
        gap: 150
    },
    RutinaText: {
        color: '#D71920',
        fontSize: 16,
        fontWeight: 'bold'
    },
    titleRutinaText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },

    deFLex: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        backgroundColor: 'rgba(255, 255, 255, 255)',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        padding: 3,
        gap: 5,
        paddingLeft: 10,

    },
});

