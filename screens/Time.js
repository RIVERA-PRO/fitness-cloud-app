import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Timer from '../components/Timer';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import imagebg from '../assets/home.png'
import tilde from '../assets/tilde.png'
import { Animated, Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
export default function Time() {
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
                // Reinicia la animación cuando el screen pierde el foco
                animationValue.setValue(0);
            };
        }, [])
    );

    const translateX = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 0], // Inicia desde 200 unidades a la izquierda y se desplaza hacia la derecha
    });
    const navigation = useNavigation();
    const navigateToRutina = () => {
        navigation.navigate('Rutina'); // Reemplaza 'Categorias' con la ruta correcta a tu página de categorías
    };
    const navigateToRutina2 = () => {
        navigation.navigate('Rutina2'); // Reemplaza 'Categorias' con la ruta correcta a tu página de categorías
    };
    const navigateToRutina3 = () => {
        navigation.navigate('Rutina3'); // Reemplaza 'Categorias' con la ruta correcta a tu página de categorías
    };
    const navigateToRutina4 = () => {
        navigation.navigate('Rutina4'); // Reemplaza 'Categorias' con la ruta correcta a tu página de categorías
    };
    const navigateToRutina5 = () => {
        navigation.navigate('Rutina5'); // Reemplaza 'Categorias' con la ruta correcta a tu página de categorías
    };
    const navigateToRutina6 = () => {
        navigation.navigate('Rutina6'); // Reemplaza 'Categorias' con la ruta correcta a tu página de categorías
    };
    const navigateToRutina7 = () => {
        navigation.navigate('Rutina7'); // Reemplaza 'Categorias' con la ruta correcta a tu página de categorías
    };
    return (

        <ImageBackground source={imagebg} style={styles.scrollViewTime} >

            <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
                <View style={styles.contain}>
                    <LinearGradient colors={['#D71920', '#D71920', '#AC1929', '#AC1929',]} style={styles.titleRutina} start={{ x: 0, y: 0 }}>
                        <Ionicons name="checkmark-circle" size={23} color='#fff' />
                        <Text style={styles.titleRutinaText}>Arma tu rutina en 7 dias</Text>
                        <AntDesign name="arrowdown" size={20} color='#fff' />
                    </LinearGradient>

                    <TouchableOpacity onPress={navigateToRutina} >
                        <LinearGradient colors={['#D71920', '#D71920', '#AC1929', '#AC1929',]} start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }} style={styles.RutinaBtn}>
                            <View style={styles.deFLex}>
                                <Image source={tilde} style={styles.icon} />
                                <Text style={styles.RutinaText}> Dia 1</Text>

                            </View>
                            <AntDesign name="doubleright" size={24} color='#fff' />
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToRutina2} >
                        <LinearGradient colors={['#D71920', '#D71920', '#AC1929', '#AC1929',]} start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }} style={styles.RutinaBtn}>
                            <View style={styles.deFLex} >

                                <Image source={tilde} style={styles.icon} />
                                <Text style={styles.RutinaText}> Dia 2</Text>

                            </View>
                            <AntDesign name="doubleright" size={24} color='#fff' />
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToRutina3} >
                        <LinearGradient colors={['#D71920', '#D71920', '#AC1929', '#AC1929',]} start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }} style={styles.RutinaBtn}>
                            <View style={styles.deFLex}>
                                <Image source={tilde} style={styles.icon} />
                                <Text style={styles.RutinaText}> Dia 3</Text>
                            </View>
                            <AntDesign name="doubleright" size={24} color='#fff' />

                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToRutina4} >
                        <LinearGradient colors={['#D71920', '#D71920', '#AC1929', '#AC1929',]} start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }} style={styles.RutinaBtn}>
                            <View style={styles.deFLex}>
                                <Image source={tilde} style={styles.icon} />
                                <Text style={styles.RutinaText}> Dia 4</Text>
                            </View>
                            <AntDesign name="doubleright" size={24} color='#fff' />

                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToRutina5} >
                        <LinearGradient colors={['#D71920', '#D71920', '#AC1929', '#AC1929',]} start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }} style={styles.RutinaBtn}>
                            <View style={styles.deFLex}>
                                <Image source={tilde} style={styles.icon} />
                                <Text style={styles.RutinaText}> Dia 5</Text>
                            </View>
                            <AntDesign name="doubleright" size={24} color='#fff' />
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToRutina6} >
                        <LinearGradient colors={['#D71920', '#D71920', '#AC1929', '#AC1929',]} start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }} style={styles.RutinaBtn}>

                            <View style={styles.deFLex}>
                                <Image source={tilde} style={styles.icon} />
                                <Text style={styles.RutinaText}> Dia 6</Text>

                            </View>
                            <AntDesign name="doubleright" size={24} color='#fff' />
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToRutina7} >
                        <LinearGradient colors={['#D71920', '#D71920', '#AC1929', '#AC1929',]} start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }} style={styles.RutinaBtn}>
                            <View style={styles.deFLex}>
                                <Image source={tilde} style={styles.icon} />
                                <Text style={styles.RutinaText}> Dia 7</Text>
                            </View>
                            <AntDesign name="doubleright" style={styles.icon2} size={24} color='#fff' />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    scrollViewTime: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',


    },
    contain: {
        margin: 10,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    titleRutina: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D71920',
        padding: 15,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around',
        borderRadius: 10,
        width: 300,
    },

    RutinaBtn: {
        backgroundColor: '#D71920',
        height: 50,
        margin: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        justifyContent: 'space-between',
        borderRadius: 10,
        shadowColor: 'rgba(215, 25, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
        gap: 150
    },
    RutinaText: {
        color: '#D71920',
        fontSize: 16,
        fontWeight: 'bold'
    },
    titleRutinaText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },

    deFLex: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        backgroundColor: 'rgba(255, 255, 255, 255)',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        padding: 3,
        gap: 5,
        paddingLeft: 10,

    },
    icon: {
        borderRadius: 100,
        width: 20,
        height: 20
    },
    icon2: {


    }



});
