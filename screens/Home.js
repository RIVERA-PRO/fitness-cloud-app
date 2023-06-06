import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import bg from '../assets/home.png';
import HomeTitle from '../components/HomeTitle';
import AllsCategory from '../components/AllsCategory';
import AllEjercicios from '../components/AllEjercicios';
import MoreEjercice from '../components/MoreEjercice';
import Empieza from '../components/Empieza';
import Header from '../components/Header';
import { AntDesign } from '@expo/vector-icons';
export default function Home() {
    const navigation = useNavigation();
    const animation = useRef(new Animated.Value(0)).current;

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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <LinearGradient colors={['#AC1929', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']} style={styles.container}>
                <Animated.ScrollView style={[styles.scrollViewHome, homeStyle]}>
                    <Header />
                    <View style={styles.seccionMas}>
                        <Text style={styles.categoriasText}>Ejercicios</Text>
                        <TouchableOpacity onPress={navigateToEjercicios} style={styles.verMasbtn}>
                            <Text style={styles.verMasText}>Ver más </Text>
                            <Text> <AntDesign name="right" size={12} color='#D71920' /> </Text>
                        </TouchableOpacity>
                    </View>
                    <AllEjercicios navigation={navigation} />
                    <View style={styles.seccionMas}>
                        <Text style={styles.categoriasText}>Categorias</Text>
                        <TouchableOpacity onPress={navigateToCategories} style={styles.verMasbtn}>
                            <Text style={styles.verMasText}>Ver más </Text>

                            <Text> <AntDesign name="right" size={12} color='#D71920' /> </Text>
                        </TouchableOpacity>
                    </View>
                    <AllsCategory navigation={navigation} />
                    <Empieza />

                </Animated.ScrollView>
                <View style={styles.seccionMas}>
                    <Text style={styles.categoriasText}>Destacados</Text>
                    <TouchableOpacity onPress={navigateToEjercicios} style={styles.verMasbtn}>
                        <Text style={styles.verMasText}>Ver más </Text>
                        <Text> <AntDesign name="right" size={12} color='#D71920' /> </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>

                    <MoreEjercice navigation={navigation} />
                </ScrollView>

            </LinearGradient >
        </ScrollView>
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
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,

    },

    verMasText: {
        color: '#D71920',
        fontSize: 14,


    },
    verMasbtn: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    categoriasText: {
        color: 'rgba(0, 0, 0, 0.9)',
        fontSize: 16,
        fontWeight: 'bold',
    },

});
