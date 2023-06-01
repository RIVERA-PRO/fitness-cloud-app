import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { ejerciciosData } from '../components/Data';

export default function Yoga({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const yogaExercises = ejerciciosData.filter(exercise => exercise.categoria === 'Yoga' && exercise.title.toLowerCase().includes(searchText.toLowerCase()));

    const goToDetail = (exerciseId) => {
        navigation.navigate('Detail', { exerciseId });
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.seccion}>
                <Text style={styles.texto}>Yoga</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar ejercicio"
                    value={searchText}
                    onChangeText={text => setSearchText(text)}
                />
            </View>
            <View style={styles.seccion2}>
                {yogaExercises.map(exercise => (
                    <TouchableOpacity key={exercise.id} style={styles.exerciseItem} onPress={() => goToDetail(exercise.id)}>
                        <View style={styles.exerciseContent}>
                            <ImageBackground source={{ uri: exercise.img }} style={styles.exerciseImage} resizeMode="cover">
                            </ImageBackground>
                            <Text style={styles.exerciseName}>{exercise.title}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        height: "200%",
        padding: 10,
        width: '100%',
    },
    seccion: {
        height: "20%",
        padding: 20,
        justifyContent: 'center',
    },
    seccion2: {
        height: "100%",
    },
    texto: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 35,
    },
    searchInput: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    exerciseItem: {
        margin: 10,
        backgroundColor: '#000',
        borderRadius: 8,
        padding: 10
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
