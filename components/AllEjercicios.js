import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { ejerciciosData } from './Data';
import { AntDesign } from '@expo/vector-icons';
import { Animated, Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
export default function AllEjercicios({ navigation }) {
    const [exercises, setExercises] = useState([]);
    const [animationValue] = useState(new Animated.Value(0));
    const startAnimation = () => {
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 900,
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
    useEffect(() => {
        const shuffledExercises = shuffle(ejerciciosData);
        const slicedExercises = shuffledExercises.slice(0, 6);
        setExercises(slicedExercises);
    }, []);
    const navigateToEjercicios = () => {
        navigation.navigate('Ejercicios'); // Reemplaza 'Categorias' con la ruta correcta a tu página de categorías
    };
    const shuffle = (array) => {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    const goToDetail = (exerciseId) => {
        navigation.navigate('Detail', { exerciseId });
    };

    return (
        <ScrollView style={styles.scrollView2}>
            <View style={styles.seccionMas}>
                <Text style={styles.categoriasText}>Ejercicios</Text>
                <TouchableOpacity onPress={navigateToEjercicios} style={styles.verMasbtn}>
                    <Text style={styles.verMasText}>Ver más </Text>
                    <FontAwesome name="angle-double-right" size={17} style={styles.icon} color='#D71920' />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={styles.scrollView}>

                {exercises.map((exercise) => (
                    <TouchableOpacity key={exercise.id} onPress={() => goToDetail(exercise.id)}>
                        <View style={styles.exerciseItem}>

                            <View style={styles.imageContainer}>
                                <ImageBackground source={{ uri: exercise.img }} style={styles.exerciseImage} />

                            </View>


                            <Text style={styles.titleEjercice}> {exercise.title.slice(0, 7)}..</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        height: '250%',
        alignContent: 'center',
        paddingTop: 10,
    },
    scrollView2: {
        height: '350%',
        alignContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 7,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
        paddingLeft: 10,
        marginLeft: 10,
        marginRight: 10
    },
    exerciseItem: {
        marginRight: 20,
        height: 120,
        flex: 1,


    },
    exerciseImage: {
        width: 70,
        height: 70,

    },
    exerciseName: {
        position: 'absolute',
        top: 160,
        left: 20,
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,

    },
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 100,
        overflow: 'hidden',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    },
    titleEjercice: {
        fontSize: 12,
        left: 3,
        paddingTop: 6,
        color: 'rgba(0, 0, 0, 0.7)',
    },
    seccionMas: {
        flex: 1,
        flexGrow: 1,
        height: '100%',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        width: '100%',


        paddingTop: 15,


    },

    verMasText: {
        color: '#D71920',
        fontSize: 14,


    },
    verMasbtn: {
        flexDirection: 'row',
        alignContent: 'center',
        marginRight: 5
    },
    categoriasText: {
        color: 'rgba(0, 0, 0, 0.9)',
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        marginTop: 2
    },
});
