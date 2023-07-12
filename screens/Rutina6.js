import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Timer from '../components/Timer';
import imagebg from '../assets/home.png'
import tilde from '../assets/tilde.png'
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/HeaderBlanco';
export default function Rutina6() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [favorites, setFavorites] = useState([]);
    const [filterText, setFilterText] = useState('');

    const navigateEjercicios = () => {
        navigation.navigate('Ejercicios'); // Reemplaza 'Categorias' con la ruta correcta a tu página de categorías
    };

    useEffect(() => {
        const getFavorites = async () => {
            try {
                const favoritesData = await AsyncStorage.getItem('Dia6');
                if (favoritesData) {
                    setFavorites(JSON.parse(favoritesData));
                }
            } catch (error) {
                console.log('Error getting Dia6:', error);
            }
        };

        if (isFocused) {
            getFavorites();
        }
    }, [isFocused]);

    const removeExercise = async (exerciseId) => {
        try {
            const updatedFavorites = favorites.filter((exercise) => exercise.id !== exerciseId);
            await AsyncStorage.setItem('Dia6', JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
        } catch (error) {
            console.log('Error removing Dia6:', error);
        }
    };

    const removeAllExercises = async () => {
        try {
            await AsyncStorage.removeItem('Dia6');
            setFavorites([]);
        } catch (error) {
            console.log('Error removing all Dia6:', error);
        }
    };

    const goToDetail = (exerciseId) => {
        navigation.navigate('Detail', { exerciseId });
    };

    const filterExercises = (exercise) => {
        return exercise.title.toLowerCase().includes(filterText.toLowerCase());
    };

    const goToTime = () => {
        navigation.navigate('Time');

    };
    return (
        <>


            {favorites.length > 0 ? (

                <View>

                    <LinearGradient colors={['#AC1929', '#D71920',]} style={styles.containerInput}>

                        <TouchableOpacity onPress={goToTime}  >
                            <Fontisto name="angle-dobule-left" size={18} color="#fff" />
                        </TouchableOpacity>
                        <View style={styles.titleCantidad}>
                            <Text style={styles.textoTitle}> Ejercicios del Dia 6</Text>
                            <Text style={styles.textoCantidad}>{favorites.length}</Text>
                        </View>
                    </LinearGradient>



                    <ScrollView contentContainerStyle={styles.scrollContainer}>

                        <Timer />
                        <View style={styles.containerItems}>
                            {favorites.filter(filterExercises).map((exercise) => (
                                <View key={exercise.id} >
                                    <LinearGradient colors={['#AC1929', '#D71920',]} style={styles.exerciseItem}>

                                        <TouchableOpacity onPress={() => goToDetail(exercise.id)} >

                                            <View style={styles.exerciseImageContain} >
                                                <ImageBackground source={{ uri: exercise.img }} style={styles.exerciseImage} resizeMode="cover" >

                                                </ImageBackground>

                                            </View>


                                        </TouchableOpacity>



                                        <View style={styles.rowContain}>
                                            <View style={styles.deFLex2}>
                                                <Text style={styles.exerciseName}>{exercise.title.slice(0, 60)}</Text>
                                                <TouchableOpacity onPress={() => removeExercise(exercise.id)} style={styles.close}>
                                                    <Ionicons name="close" size={24} color="#fff" />
                                                </TouchableOpacity>


                                            </View>
                                            <View style={styles.deFLex}>
                                                <View style={styles.row}>
                                                    <Text style={styles.labelText}>Series</Text>
                                                    <View style={styles.counterContainer}>
                                                        <TextInput
                                                            placeholder="1"
                                                            keyboardType="numeric"
                                                            style={styles.input}
                                                        />
                                                    </View>
                                                </View>
                                                <View style={styles.row}>
                                                    <Text style={styles.labelText}>Repet</Text>
                                                    <View style={styles.counterContainer}>
                                                        <TextInput
                                                            placeholder="1"
                                                            keyboardType="numeric"
                                                            style={styles.input}
                                                        />

                                                    </View>
                                                </View>


                                            </View>

                                        </View>
                                    </LinearGradient>
                                </View>
                            ))}
                        </View>

                        <LinearGradient colors={['#000', '#000']} >
                            {favorites.length > 0 && (
                                <TouchableOpacity onPress={removeAllExercises} >
                                    <LinearGradient colors={['#AC1929', '#D71920',]} style={styles.Remover} >
                                        <Text style={styles.RemoverText}>Remover todos</Text>

                                    </LinearGradient>
                                </TouchableOpacity>
                            )}

                        </LinearGradient>

                        <LinearGradient colors={['#000', '#000']} style={styles.container}>

                            <View style={styles.noHayFavoritos}>

                            </View>

                        </LinearGradient>
                    </ScrollView >
                </View >



            ) : (

                <>
                    <LinearGradient colors={['#AC1929', '#D71920',]} style={styles.containerInput}>

                        <TouchableOpacity onPress={goToTime}  >
                            <Fontisto name="angle-dobule-left" size={18} color="#fff" />
                        </TouchableOpacity>
                        <View style={styles.titleCantidad}>
                            <Text style={styles.textoTitle}> Ejercicios del Dia 6</Text>
                            <Text style={styles.textoCantidad}>{favorites.length}</Text>
                        </View>
                    </LinearGradient>


                    <ImageBackground source={imagebg} style={styles.imagebg} resizeMode="cover" >
                        <View style={styles.noHayFavoritos}>
                            <Text style={styles.noHayFavoritos}>No hay Ejercicios del Día 6</Text>
                        </View>
                        <TouchableOpacity onPress={navigateEjercicios} >
                            <LinearGradient colors={['#AC1929', '#D71920',]} style={styles.agregar}>
                                <Text style={styles.agregarText}>Agregar</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </ImageBackground>


                </>

            )
            }

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
    },
    scrollContainer: {
        flexGrow: 1,


    },
    containerItems: {
        backgroundColor: '#000',
        marginTop: -30,
        padding: 15,
        paddingTop: 50

    },
    containerInput: {
        paddingHorizontal: 30,
        height: 110,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        paddingTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop: 10,

    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,

    },
    exerciseItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: '#000',
        borderRadius: 10,
        shadowColor: 'rgba(255, 255, 255, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10.25,
        shadowRadius: 30,
        elevation: 5,


    },

    exerciseImageContain: {
        borderRadius: 10,
        width: 110,
        height: 140
    },
    exerciseImage: {
        width: '100%',
        height: 140,
        borderRadius: 10,
        overflow: 'hidden'

    },
    exerciseName: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        width: '100%',
    },
    textoTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
    },
    textoCantidad: {
        alignItems: 'center',

        fontWeight: 'bold',
        color: '#D71920',
        backgroundColor: '#fff',
        padding: 3,
        borderRadius: 100,
        width: 30,
        height: 25,
        textAlign: 'center',
        alignItems: 'center',

    },
    titleCantidad: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end',
        padding: 10,
        gap: 10
    },
    Remover: {
        backgroundColor: '#D71920',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        borderRadius: 8,
        marginTop: 20,
        margin: 20
    },
    agregar: {
        backgroundColor: '#D71920',
        padding: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 20,
        marginLeft: 96,
        marginRight: 96,
        textAlign: 'center',
        shadowColor: '#D71920',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10.25,
        shadowRadius: 30,
        elevation: 5,
    },
    agregarText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15
    },
    RemoverText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15
    },
    noHayFavoritos: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200,
        color: '#fff',
        fontSize: 16
    },

    deFLex: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    rowContain: {
        flexDirection: 'column',
        gap: 20,
        paddingLeft: 10

    },
    row: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
    },

    labelText: {
        alignItems: 'center',
        marginBottom: 6,
        color: '#fff'
    },



    input: {
        backgroundColor: '#fff',
        width: 50,
        borderRadius: 7,
        alignItems: 'center',
        textAlign: 'center'
    },

    deFLex2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '68%',
        gap: 10
    },
    imagebg: {
        height: '100%'
    }
});
