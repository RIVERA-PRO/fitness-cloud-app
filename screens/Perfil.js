import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated, Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/HeaderBlanco';
import imageBg from '../assets/Favoritos.png'
import imageHome from '../assets/home.png'
export default function Perfil() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [favorites, setFavorites] = useState([]);
    const [animationValue] = useState(new Animated.Value(0));

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
                animationValue.setValue(0);
            };
        }, [])
    );

    const translateY = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 0],
    });

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

    return (
        <LinearGradient colors={['#AC1929', '#D71920',]} style={styles.container}>

            {favorites?.length > 0 ? (
                <View style={styles.container}>

                    <View style={styles.header}>
                        <LinearGradient colors={['#AC1929', '#D71920',]} style={styles.headerBg}>
                            <Header />
                        </LinearGradient>
                    </View>
                    <Animated.View style={[{ transform: [{ translateY }] }]}>
                        <ScrollView contentContainerStyle={styles.scrollContainer}>

                            <View style={styles.imageBgcontain}>
                                <ImageBackground source={imageBg} style={styles.imageBg}>

                                </ImageBackground>
                            </View>

                            <View style={styles.exerciseItemContain} >
                                {favorites.map((exercise) => (
                                    <View key={exercise?.id} style={styles.exerciseItem}>
                                        <TouchableOpacity onPress={() => goToDetail(exercise.id)}>
                                            <View style={styles.exerciseContent}>
                                                <TouchableOpacity onPress={() => removeExercise(exercise?.id)} style={styles.close} >
                                                    <MaterialIcons name="favorite" size={20} color='#D71920' />

                                                </TouchableOpacity>
                                                <ImageBackground source={{ uri: exercise?.img }} style={styles.exerciseImage} resizeMode="cover">

                                                </ImageBackground>
                                                <Text style={styles.exerciseName}>{exercise?.title?.slice(0, 15)}..</Text>

                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                ))}

                            </View>
                            {favorites.length > 1 && (
                                <TouchableOpacity onPress={removeAllExercises} >
                                    <LinearGradient colors={['#AC1929', '#D71920',]} style={styles.Remover}>
                                        <Text style={styles.RemoverText}>Remover todos</Text>

                                    </LinearGradient>
                                </TouchableOpacity>
                            )}
                            <View style={styles.noHayFavoritos}>
                                <Text style={styles.noHayFavoritos}></Text>
                            </View>

                        </ScrollView>



                    </Animated.View>
                </View>
            ) : (
                <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
                    <LinearGradient colors={['#fff', '#fff']} style={styles.container}>
                        <View style={styles.header}>
                            <LinearGradient colors={['#AC1929', '#D71920',]} style={styles.headerBg}>
                                <Header />
                            </LinearGradient>
                        </View>

                        <ImageBackground source={imageHome} style={styles.imageHome}>
                            <View style={styles.noHayFavoritos}>
                                <Text style={styles.noHayFavoritos}>No hay favoritos</Text>
                            </View>
                        </ImageBackground>


                    </LinearGradient>
                </Animated.View>
            )}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#171414',
        borderRadius: 30,
        marginTop: 105

    },


    exerciseItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 15,

    },
    exerciseContent: {
        flexDirection: 'column',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10.25,
        shadowRadius: 30,
        elevation: 4,
        borderRadius: 10,
        backgroundColor: '#fff',
        width: 150,
        marginTop: 20
    },
    exerciseImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,

        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    exerciseName: {
        color: '#000',
        fontSize: 14,
        padding: 5
    },

    titleCantidad: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10
    },
    Remover: {

        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        borderRadius: 8,
        margin: 20

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
    },
    deFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        width: '100%',
        marginBottom: 20,
        borderRadius: 20,
        position: 'absolute',
        zIndex: 2,
        top: 0,



    },

    headerBg: {
        paddingTop: 50,
        height: 120,
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    imageBgcontain: {
        overflow: 'hidden',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    imageBg: {
        overflow: 'hidden',
        height: 200,

    },
    exerciseItemContain: {
        flexDirection: 'row',
        flexWrap: 'wrap',

        alignItems: 'center',
        justifyContent: 'center'


    },
    close: {
        marginLeft: '80%',
        padding: 5
    },

    imageHome: {
        height: 800,
    }
});
