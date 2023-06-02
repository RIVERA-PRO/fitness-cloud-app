import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { ejerciciosData } from './Data';

export default function AllEjercicios({ navigation }) {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const shuffledExercises = shuffle(ejerciciosData);
        const slicedExercises = shuffledExercises.slice(0, 10);
        setExercises(slicedExercises);
    }, []);

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
        <ScrollView horizontal={true} style={styles.scrollView}>
            {exercises.map((exercise) => (
                <TouchableOpacity key={exercise.id} onPress={() => goToDetail(exercise.id)}>
                    <View style={styles.exerciseItem}>
                        <View style={styles.imageContainer}>
                            <ImageBackground source={{ uri: exercise.img }} style={styles.exerciseImage} />
                        </View>

                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        padding: 20,
        height: '300%',

        alignContent: 'center',
    },
    exerciseItem: {
        marginRight: 10,
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
        width: 70,
        height: 70,
        borderRadius: 100,
        overflow: 'hidden',
        borderColor: '#000',
        borderWidth: 0.1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
    },
});
