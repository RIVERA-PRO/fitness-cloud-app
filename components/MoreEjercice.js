import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { ejerciciosData } from './Data';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

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
        <View style={styles.scrollView}>
            {exercises.map((exercise) => (
                <TouchableOpacity key={exercise.id} onPress={() => goToDetail(exercise.id)} style={styles.exerciseItem}>
                    <LinearGradient colors={['#D71920', '#AC1929',]} style={styles.exerciseContent}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}>

                        <ImageBackground source={{ uri: exercise.img }} style={styles.exerciseImage} resizeMode="cover">
                        </ImageBackground>

                        <View style={styles.deFlexColumn}>
                            {exercise.title.length > 26 ? (
                                <Text style={styles.exerciseName}>{exercise.title.slice(0, 26)}...</Text>
                            ) : (
                                <Text style={styles.exerciseName}>{exercise.title}</Text>
                            )}

                            <Text style={styles.categoria}>{exercise?.categoria}</Text>
                        </View>
                        <MaterialIcons name="fitness-center" style={styles.icon} size={18} color='#D71920' />
                    </LinearGradient>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({

    scrollView: {
        height: 400,
        padding: 10,
        marginTop: -20

    },


    exerciseItem: {
        marginTop: 15,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 1,
        padding: 1


    },
    exerciseContent: {
        flexDirection: 'row',
        alignItems: 'center',
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

        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,


    },
    icon: {
        backgroundColor: '#fff',
        padding: 3,
        borderRadius: 100
    },
    deFlexColumn: {
        width: '65%'
    },
    categoria: {
        color: '#fff',
        fontSize: 13
    }

});
