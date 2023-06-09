import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { ejerciciosData } from './Data';
import { Animated, Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
export default function AllsCategory({ navigation }) {
    const [categories, setCategories] = useState([]);
    const [animation] = useState(new Animated.Value(0));
    const [animationValue] = useState(new Animated.Value(0));
    const startAnimation = () => {
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 900,
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
    useEffect(() => {
        const uniqueCategories = removeDuplicates(ejerciciosData, 'fondo');
        const orderedCategories = orderCategories(uniqueCategories);
        setCategories(orderedCategories);
    }, []);

    useEffect(() => {
        animateCategories();
    }, []);

    const animateCategories = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const selectCategory = (category) => {
        navigation.navigate(category.categoria);
    };

    const removeDuplicates = (array, key) => {
        const seen = new Set();
        return array.filter((item) => {
            const value = item[key];
            if (seen.has(value)) {
                return false;
            } else {
                seen.add(value);
                return true;
            }
        });
    };

    const orderCategories = (array) => {
        const order = ['Cardio', 'Biceps', 'Cuadriceps', 'Espalda', 'Gluteos', 'Abdominales',];
        const orderedArray = order.map((categoria) => array.find((item) => item.categoria === categoria));
        return orderedArray.filter(Boolean);
    };

    const getCategoryAnimationStyle = (index) => {
        const translateY = animation.interpolate({
            inputRange: [0, 1],
            outputRange: [200, 0],
            extrapolate: 'clamp',
        });

        return {
            transform: [{ translateY: translateY }],
            opacity: animation,
            delay: 100 * index,
        };
    };


    return (

        <ScrollView horizontal={true} style={styles.scrollView}>

            {categories.length > 0 ? (
                categories.map((item, index) => (
                    <TouchableOpacity key={item.categoria} onPress={() => selectCategory(item)}>
                        <Animated.View style={[styles.carouselItem, { transform: [{ translateX }] }]}>
                            <ImageBackground source={{ uri: item.fondo }} style={styles.categoryBackgroundImage} />
                            <Text style={styles.categoryName}>{item.categoria}</Text>
                        </Animated.View>
                    </TouchableOpacity>
                ))
            ) : (
                <Text>Loading...</Text>
            )}
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    scrollView: {


        height: '500%',
        marginLeft: 10,
    },
    categoryBackgroundImage: {
        width: 150,
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 6,
    },
    categoryName: {
        position: 'absolute',
        top: 170,
        left: 20,
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    carouselItem: {
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 50,

    },

});
