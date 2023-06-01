import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { ejerciciosData } from './Data';


export default function MoreEjercice({ navigation }) {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const shuffledExercises = shuffle(ejerciciosData);
        const slicedExercises = shuffledExercises.slice(0, 6);
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
        <View style={styles.scrollView}>
            {exercises.map((exercise) => (
                <TouchableOpacity key={exercise.id} onPress={() => goToDetail(exercise.id)}>
                    <View style={styles.exerciseItem}>

                        <View style={styles.exerciseContent}>
                            <ImageBackground source={{ uri: exercise.img }} style={styles.exerciseImage} resizeMode="cover">
                            </ImageBackground>
                            <Text style={styles.exerciseName}>{exercise.title.slice(0, 20)}</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({

    scrollView: {
        padding: 20,
        height: '100%',
        marginTop: 100,
        backgroundColor: '#234234',

    },


    exerciseItem: {
        margin: 10,
        backgroundColor: '#000',
        borderRadius: 8,
        padding: 10,

    },
    exerciseContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    exerciseImage: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginRight: 10,
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    exerciseName: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        padding: 10,
        width: '80%',
    },
});
