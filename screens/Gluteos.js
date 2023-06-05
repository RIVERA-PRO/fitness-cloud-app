import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { ejerciciosData } from '../components/Data';
import Header from '../components/Header';
import gluteosImg from '../assets/gluteos.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Gluteos({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const gluteosExercises = ejerciciosData.filter(exercise => exercise.categoria === 'Gluteos' && exercise.title.toLowerCase().includes(searchText.toLowerCase()));

    const goToDetail = (exerciseId) => {
        navigation.navigate('Detail', { exerciseId });
    };

    return (
        <ImageBackground source={gluteosImg} resizeMode="cover">
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header />



                <View style={styles.seccion}>
                    <View style={styles.titleCantidad}>
                        <Text style={styles.textoTitle}>Ejercicios de Gluteos</Text>
                        <Text style={styles.textoCantidad}>{gluteosExercises.length}</Text>
                    </View>
                    <View style={styles.searchInputContainer}>
                        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Buscar ejercicio"
                            value={searchText}
                            onChangeText={text => setSearchText(text)}
                        />
                    </View>
                </View>
                <ScrollView style={styles.seccion2}>
                    {gluteosExercises.map(exercise => (
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
        backgroundColor: '#D71920',
        padding: 6,
        borderRadius: 100,
        width: 50,
        height: 30,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
    },
    exerciseItem: {
        marginTop: 15,

        borderRadius: 10,


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
    titleCantidad: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 10
    }
});
