import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { ejerciciosData } from '../components/Data';
import Header from '../components/Header';
import cuadricepsImg from '../assets/cuadriceps.jpg'
export default function Cuadriceps({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const cuadricepsExercises = ejerciciosData.filter(exercise => exercise.categoria === 'Cuadriceps' && exercise.title.toLowerCase().includes(searchText.toLowerCase()));

    const goToDetail = (exerciseId) => {
        navigation.navigate('Detail', { exerciseId });
    };

    return (
        <ImageBackground source={cuadricepsImg} resizeMode="cover">
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header />

                <View style={styles.seccion}>
                    <View style={styles.titleCantidad}>
                        <Text style={styles.textoTitle}>Ejercicios de Cuadriceps</Text>
                        <Text style={styles.textoCantidad}>{cuadricepsExercises.length}</Text>
                    </View>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar ejercicio"
                        value={searchText}
                        onChangeText={text => setSearchText(text)}
                    />
                </View>
                <ScrollView style={styles.seccion2}>
                    {cuadricepsExercises.map(exercise => (
                        <TouchableOpacity key={exercise.id} style={styles.exerciseItem} onPress={() => goToDetail(exercise.id)}>
                            <View style={styles.exerciseContent}>
                                <ImageBackground source={{ uri: exercise.img }} style={styles.exerciseImage} resizeMode="cover">
                                </ImageBackground>
                                <Text style={styles.exerciseName}>{exercise.title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        height: "220%",
        width: '100%',
        marginTop: 300,
        backgroundColor: '#f5f5f5',
        borderRadius: 30
    },
    seccion: {

        padding: 20,
        justifyContent: 'center',
    },
    seccion2: {

        padding: 20,
        height: "50%",
    },
    textoTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 19,
        fontWeight: 'bold',

    },
    textoCantidad: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: 'rgba(215, 25, 0, 0.8)',
        padding: 6,
        borderRadius: 100,
        width: 50,
        height: 30,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchInput: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    exerciseItem: {
        marginTop: 15,
        backgroundColor: 'rgba(215, 25, 0, 0.8)',
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: 'rgba(215, 25, 0, 0.8)',
    },
    exerciseContent: {
        flexDirection: 'row',
        alignItems: 'center',
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
        fontSize: 17,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        padding: 10,
        width: '80%',
    },
    titleCantidad: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 10
    }
});
