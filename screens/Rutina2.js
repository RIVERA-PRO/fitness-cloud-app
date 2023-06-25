import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Timer from '../components/Timer';
export default function Rutina2() {
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
                const favoritesData = await AsyncStorage.getItem('Dia2');
                if (favoritesData) {
                    setFavorites(JSON.parse(favoritesData));
                }
            } catch (error) {
                console.log('Error getting Dia1:', error);
            }
        };

        if (isFocused) {
            getFavorites();
        }
    }, [isFocused]);

    const removeExercise = async (exerciseId) => {
        try {
            const updatedFavorites = favorites.filter((exercise) => exercise.id !== exerciseId);
            await AsyncStorage.setItem('Dia2', JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
        } catch (error) {
            console.log('Error removing Dia2:', error);
        }
    };

    const removeAllExercises = async () => {
        try {
            await AsyncStorage.removeItem('Dia2');
            setFavorites([]);
        } catch (error) {
            console.log('Error removing all Dia2:', error);
        }
    };

    const goToDetail = (exerciseId) => {
        navigation.navigate('Detail', { exerciseId });
    };

    const filterExercises = (exercise) => {
        return exercise.title.toLowerCase().includes(filterText.toLowerCase());
    };

    return (
        <LinearGradient colors={['#AC1929', '#D71920',]} style={styles.container}>


            {favorites.length > 0 ? (
                <LinearGradient colors={['#AC1929', '#D71920', '#D71920', '#D71920']} style={styles.container}>
                    <View style={styles.containerInput}>
                        <View style={styles.titleCantidad}>
                            <Text style={styles.textoTitle}> Ejercicios del Dia 2</Text>
                            <Text style={styles.textoCantidad}>{favorites.length}</Text>
                        </View>

                    </View>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <Timer />
                        {favorites.filter(filterExercises).map((exercise) => (
                            <View key={exercise.id} style={styles.exerciseItem}>
                                <View style={styles.ejerciceDelet}>
                                    <TouchableOpacity onPress={() => goToDetail(exercise.id)} >
                                        <View style={styles.exerciseContent}>
                                            <ImageBackground source={{ uri: exercise.img }} style={styles.exerciseImage} resizeMode="cover">
                                            </ImageBackground>
                                            <Text style={styles.exerciseName}>{exercise.title.slice(0, 60)}</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>



                                <View style={styles.rowContain}>
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
                                    <TouchableOpacity onPress={() => removeExercise(exercise.id)}>
                                        <Text><MaterialIcons name="delete" size={24} color="#fff" /></Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                        {favorites.length > 0 && (
                            <TouchableOpacity onPress={removeAllExercises} style={styles.Remover}>
                                <Text style={styles.RemoverText}>Remover todos</Text>
                                <MaterialIcons name="delete" size={20} color="#fff" />
                            </TouchableOpacity>
                        )}


                    </ScrollView>


                </LinearGradient>
            ) : (
                <LinearGradient colors={['#fff', '#fff']} style={styles.container}>

                    <View style={styles.noHayFavoritos}>
                        <Text style={styles.noHayFavoritos}>No hay Rutinas del Día 2</Text>
                    </View>
                    <TouchableOpacity onPress={navigateEjercicios} style={styles.agregar}>
                        <Text style={styles.agregarText}>Agregar</Text>

                    </TouchableOpacity>
                </LinearGradient>

            )}

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
    },
    scrollContainer: {
        flexGrow: 1,
        paddingTop: 24,
        backgroundColor: '#F9F9F9',
        padding: 20,
        marginTop: 50,
        borderRadius: 30,
        height: '350%'
    },
    containerInput: {
        padding: 20,
        marginTop: 50,
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
        borderColor: '#000',
        borderRadius: 10,
        backgroundColor: '#D71920',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10.25,
        shadowRadius: 30,
        elevation: 10,
    },
    exerciseContent: {
        flexDirection: 'row',
        alignItems: 'center',

        borderRadius: 1,
        borderWidth: 0.1,  // Agrega esta línea para el borde
        borderColor: '#fff'  // Puedes cambiar el color del borde aquí
    },
    exerciseImage: {
        width: 70,
        height: 70,
        borderTopLeftRadius: 10,

        marginRight: 10,
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    exerciseName: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        padding: 10,
        width: '75%',
    },
    textoTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    textoCantidad: {
        alignItems: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        color: '#D71920',
        backgroundColor: '#fff',
        padding: 6,
        borderRadius: 100,
        width: 50,
        height: 30,
        textAlign: 'center',
        alignItems: 'center',

    },
    titleCantidad: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10
    },
    Remover: {
        backgroundColor: '#D71920',
        padding: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        borderRadius: 8,
        marginTop: 20
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
        textAlign: 'center'
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
        marginTop: 100,
        color: '#000',
        fontSize: 16
    },



    rowContain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 30,
        paddingTop: 10
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


    ejerciceDelet: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#fff',
        width: 50,
        borderRadius: 7,
        alignItems: 'center',
        textAlign: 'center'
    }
});
