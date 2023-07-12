import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import bg from '../assets/home.png';
import HomeTitle from '../components/HomeTitle';
import AllsCategory from '../components/AllsCategory';
import AllEjercicios from '../components/AllEjercicios';
import MoreEjercice from '../components/MoreEjercice';
import Empieza from '../components/Empieza';
import Header from '../components/HeaderBlanco';
import { AntDesign } from '@expo/vector-icons';
import { Animated, Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
export default function Home() {
    const navigation = useNavigation();
    const animation = useRef(new Animated.Value(0)).current;


    const [animationValue] = useState(new Animated.Value(0));
    const startAnimation = () => {
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 700,
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



    const navigateToCategories = () => {
        navigation.navigate('Categorias'); // Reemplaza 'Categorias' con la ruta correcta a tu página de categorías
    };

    const navigateToEjercicios = () => {
        navigation.navigate('Ejercicios'); // Reemplaza 'Categorias' con la ruta correcta a tu página de categorías
    };

    useEffect(() => {
        animateHome();
    }, []);

    const animateHome = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const homeStyle = {
        opacity: animation,
    };

    return (
        <View style={styles.contenedor}>

            <View style={styles.header}>
                <LinearGradient colors={['#AC1929', '#D71920']} style={styles.bg} >
                    <Header />
                </LinearGradient>

            </View>


            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <LinearGradient colors={['#D71920', '#D71920', '#fff', '#fff', '#fff', '#f9f9f9', '#f9f9f9', '#f9f9f9', '#f9f9f9', '#f9f9f9',]} style={styles.container}>

                    <Animated.ScrollView style={[styles.scrollViewHome, homeStyle]}>

                        <AllEjercicios navigation={navigation} />




                        <View style={styles.seccionMas}>
                            <Text style={styles.categoriasText}>Categorias</Text>
                            <TouchableOpacity onPress={navigateToCategories} style={styles.verMasbtn}>
                                <Text style={styles.verMasText}>Ver más </Text>
                                <FontAwesome name="angle-double-right" size={17} style={styles.icon} color='#D71920' />

                            </TouchableOpacity>
                        </View>
                        <AllsCategory navigation={navigation} />


                        <Animated.View style={[styles.carouselItem, { transform: [{ translateY }] }]}>
                            <Empieza />
                        </Animated.View>




                    </Animated.ScrollView>

                    <Animated.View style={[{ transform: [{ translateY }] }]}>
                        <Animated.ScrollView style={[homeStyle]}>


                            <View style={styles.seccionMas}>
                                <Text style={styles.categoriasText}>Destacados</Text>
                                <TouchableOpacity onPress={navigateToEjercicios} style={styles.verMasbtn}>
                                    <Text style={styles.verMasText}>Ver más </Text>
                                    <FontAwesome name="angle-double-right" size={17} style={styles.icon} color='#D71920' />
                                </TouchableOpacity>
                            </View>
                            <ScrollView>

                                <MoreEjercice navigation={navigation} />
                            </ScrollView>
                        </Animated.ScrollView>
                    </Animated.View>
                </LinearGradient >
            </ScrollView></View >
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,


    },
    scrollViewHome: {
        height: '100%',
        flex: 1,
        gap: 30,
        paddingTop: 50,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: '100%',
    },
    seccionMas: {
        flex: 1,
        flexGrow: 1,
        height: '100%',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 5,
        paddingRight: 20,
        paddingTop: 15,
        margin: 10,

    },

    verMasText: {
        color: '#D71920',
        fontSize: 14,


    },
    verMasbtn: {
        flexDirection: 'row',
        alignContent: 'center',
        marginRight: 5
    },
    icon: {
        marginTop: 2
    },
    categoriasText: {
        color: 'rgba(0, 0, 0, 0.9)',
        fontSize: 16,
        fontWeight: 'bold',
    },
    header: {
        width: '100%',
        marginBottom: 20,



        borderRadius: 20,
        position: 'absolute',
        zIndex: 2,
        top: 0,

    },
    bg: {
        height: 120,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: 50,
    },
    container: {
        paddingTop: 70
    }

});
