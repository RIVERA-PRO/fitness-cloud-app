import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Perfil() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [favorites, setFavorites] = useState([]);
    const [filterText, setFilterText] = useState('');

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
                            <Text style={styles.textoTitle}>Tus ejercicios favoritos:  </Text>
                            <Text style={styles.textoCantidad}>{favorites.length}</Text>
                        </View>
                        <View style={styles.searchInputContainer}>
                            <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Filtrar ejercicios"
                                value={filterText}
                                onChangeText={(text) => setFilterText(text)}
                            />
                        </View>
                    </View>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        {favorites.filter(filterExercises).map((exercise) => (
                            <View key={exercise.id} style={styles.exerciseItem}>
                                <TouchableOpacity onPress={() => goToDetail(exercise.id)} >
                                    <View style={styles.exerciseContent}>
                                        <ImageBackground source={{ uri: exercise.img }} style={styles.exerciseImage} resizeMode="cover">
                                        </ImageBackground>
                                        <Text style={styles.exerciseName}>{exercise.title.slice(0, 60)}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => removeExercise(exercise.id)}>
                                    <Text><MaterialIcons name="delete" size={24} color="#D71920" /></Text>
                                </TouchableOpacity>
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
                        <Text style={styles.noHayFavoritos}>No hay favoritos</Text>
                    </View>
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
        paddingTop: 100,
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 70,
        borderRadius: 30,
        height: '300%'
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%'
    },
    exerciseContent: {
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10.25,
        shadowRadius: 30,
        elevation: 4,
        borderRadius: 10,
        backgroundColor: '#D71920'
    },
    exerciseImage: {
        width: 70,
        height: 70,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
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
        padding: 20
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
    }
});
