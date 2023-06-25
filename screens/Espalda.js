import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { ejerciciosData } from '../components/Data';
import Header from '../components/Header';
import espaldaImg from '../assets/espalda.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
export default function Espalda({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const espaldaExercises = ejerciciosData.filter(exercise => exercise.categoria === 'Espalda' && exercise.title.toLowerCase().includes(searchText.toLowerCase()));

    const goToDetail = (exerciseId) => {
        navigation.navigate('Detail', { exerciseId });
    };
    const showNoResults = espaldaExercises.length === 0;
    return (

        <ScrollView contentContainerStyle={styles.scrollContainer}>

            {/* <Header /> */}
            <View style={styles.imgBg}>
                <Image source={espaldaImg} style={styles.img} />
            </View>

            <View style={styles.seccion}>


                <View style={styles.titleCantidad}>
                    <Text style={styles.textoTitle}>Ejercicios de Espalda</Text>
                    <Text style={styles.textoCantidad}>{espaldaExercises.length}</Text>
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
                {showNoResults && (
                    <View style={styles.noResultsContainer}>
                        <Text style={styles.noResultsText}>No hay resultados</Text>
                    </View>
                )}
                {espaldaExercises.map(exercise => (
                    <TouchableOpacity key={exercise.id} style={styles.exerciseItem} onPress={() => goToDetail(exercise.id)}>
                        <LinearGradient colors={['#D71920', '#AC1929',]} style={styles.exerciseContent}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}>
                            <ImageBackground source={{ uri: exercise.img }} style={styles.exerciseImage} resizeMode="cover">
                            </ImageBackground>
                            <Text style={styles.exerciseName}>{exercise.title}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </ScrollView>

    );
}
const styles = StyleSheet.create({

    scrollContainer: {
        flexGrow: 1,
        height: "180%",
        width: '100%',
        paddingTop: 50,
        backgroundColor: '#F9F9F9',
        borderRadius: 30
    },
    seccion: {
        width: '100%',
        justifyContent: 'center',
        position: 'absolute',
        top: 40,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        padding: 20
    },
    img: {
        width: '100%',
        height: 320,

    },
    imgBg: {
        marginTop: -60
    },
    seccion2: {
        backgroundColor: '#F9F9F9',
        marginTop: -30,
        borderRadius: 30,
        padding: 20,
        height: "50%",
    },
    textoTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    textoCantidad: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
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
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 70,

        marginTop: 50

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

        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 3,

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
        marginBottom: 20,
        paddingTop: 20
    },
    noResultsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50
    },
    noResultsText: {
        fontSize: 16,
        color: '#000',
    },

});
