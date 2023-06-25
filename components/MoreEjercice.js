import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { ejerciciosData } from './Data';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
export default function MoreEjercice({ navigation }) {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const shuffledExercises = shuffle(ejerciciosData);
        const slicedExercises = shuffledExercises.slice(0, 3);
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
        <ScrollView style={styles.scrollView}>
            {exercises.map((exercise) => (
                <TouchableOpacity key={exercise.id} onPress={() => goToDetail(exercise.id)}>
                    <View style={styles.exerciseItem}>


                        <LinearGradient colors={['#D71920', '#AC1929',]} style={styles.exerciseContent}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}>
                            <ImageBackground source={{ uri: exercise.img }} style={styles.exerciseImage} resizeMode="cover">
                            </ImageBackground>
                            <Text style={styles.exerciseName}>{exercise.title.slice(0, 50)}</Text>
                        </LinearGradient>


                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    scrollView: {
        height: 400,


    },


    exerciseItem: {
        borderRadius: 8,
        padding: 10,

    },
    exerciseContent: {
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10.25,
        shadowRadius: 30,
        elevation: 2,
        backgroundColor: '#D71920',
        borderRadius: 10,
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
});
