import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { ejerciciosData } from '../components/Data';
import Header from '../components/HeaderBlanco';
import fondo from '../assets/biceps.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Animated, Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
export default function Biceps({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const selectExercises = ejerciciosData.filter(exercise => exercise.categoria === 'Biceps' && exercise.title.toLowerCase().includes(searchText.toLowerCase()));
    const [animationValue] = useState(new Animated.Value(0));
    const startAnimation = () => {
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 360,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    };

    useFocusEffect(
        React.useCallback(() => {
            startAnimation();
            return () => {
                // Reinicia la animación cuando la pantalla pierde el foco
                animationValue.setValue(0);
            };
        }, [])
    );

    const translateY = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 0], // Inicia desde 200 unidades hacia abajo y se desplaza hacia arriba
    });
    const goToDetail = (exerciseId) => {
        navigation.navigate('Detail', { exerciseId });
    };
    const showNoResults = selectExercises.length === 0;
    return (

        <View style={styles.contenedor}>

            <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
                <View style={styles.header} >
                    <LinearGradient colors={['#AC1929', '#D71920']} style={styles.header}>

                        <Header />
                    </LinearGradient>
                </View>



                <ScrollView contentContainerStyle={styles.scrollContainer}>



                    <LinearGradient colors={['#D71920', '#D71920']} style={styles.bgRojo}>

                    </LinearGradient>



                    <View style={styles.seccion}>
                        <View style={styles.imgBg}>
                            <ImageBackground source={fondo} style={styles.img} />
                        </View>

                        <View style={styles.seccion3}>
                            <View style={styles.searchInputContainer}>
                                <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
                                <TextInput
                                    style={styles.searchInput}
                                    placeholder="Buscar ejercicio"
                                    value={searchText}
                                    onChangeText={text => setSearchText(text)}
                                />
                            </View>
                            <View style={styles.titleCantidad}>

                                <Text style={styles.textoTitle}>Ejercicios de {selectExercises[4]?.categoria}</Text>
                                <Text style={styles.textoCantidad}>{selectExercises.length}</Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView style={styles.seccion2}>
                        {showNoResults && (
                            <View style={styles.noResultsContainer}>
                                <Text style={styles.noResultsText}>No hay resultados</Text>
                            </View>
                        )}
                        {selectExercises.map(exercise => (
                            <TouchableOpacity key={exercise.id} style={styles.exerciseItem} onPress={() => goToDetail(exercise.id)}>
                                <LinearGradient colors={['#D71920', '#AC1929',]} style={styles.exerciseContent}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}>
                                    <ImageBackground source={{ uri: exercise.img }} style={styles.exerciseImage} resizeMode="cover">
                                    </ImageBackground>
                                    <View style={styles.deFlexColumn}>
                                        {exercise.title.length > 25 ? (
                                            <Text style={styles.exerciseName}>{exercise.title.slice(0, 25)}...</Text>
                                        ) : (
                                            <Text style={styles.exerciseName}>{exercise.title}</Text>
                                        )}

                                        <Text style={styles.categoria}>{exercise?.categoria}</Text>
                                    </View>
                                    <MaterialIcons name="fitness-center" style={styles.icon} size={18} color='#D71920' />
                                </LinearGradient>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                </ScrollView>
            </Animated.View>
        </View>

    );
}
const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#D71920',

    },
    bgRojo: {
        backgroundColor: '#D71920',
        height: 200
    },
    scrollContainer: {
        flexGrow: 1,
        height: "200%",
        width: '100%',
        paddingTop: 50,
        backgroundColor: '#fff',
        borderRadius: 30,

    },
    seccion: {
        width: '100%',
        justifyContent: 'center',
        position: 'absolute',
        top: 130,


    },
    seccion3: {
        width: '100%',
        justifyContent: 'center',
        position: 'absolute',

        top: -100,


    },
    img: {
        width: '100%',
        height: 300,
        borderRadius: 20,
        paddingTop: 80,

    },
    imgBg: {

        flex: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 10,
        margin: 10,

    },
    seccion2: {
        backgroundColor: '#fff',


        padding: 17,
        marginTop: 210

    },
    textoTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 17,
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
        color: '#000',
        backgroundColor: '#fff',
        padding: 3,
        borderRadius: 100,
        width: 43,
        height: 25,
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
        margin: 20,
        marginTop: 200

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
    header: {
        width: '100%',
        marginBottom: 20,
        paddingTop: 50,

        height: 120,
        borderRadius: 20,
        position: 'absolute',
        zIndex: 2,
        top: 0
    },

    titleCantidad: {
        width: '100%',
        marginBottom: 20,
        paddingTop: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',

        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 20,


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
