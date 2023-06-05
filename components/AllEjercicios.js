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
                        <Text style={styles.titleEjercice}> {exercise.title.slice(0, 7)}..</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        height: '250%',
        alignContent: 'center',
        paddingLeft: 20,
        paddingTop: 10
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
        width: 70,
        height: 70,
        borderRadius: 100,
        overflow: 'hidden',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    },
    titleEjercice: {
        fontSize: 13,
        left: 8,
        paddingTop: 6,
        color: 'rgba(0, 0, 0, 0.7)',
    }
});
