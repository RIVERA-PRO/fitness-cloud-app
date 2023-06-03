import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { ejerciciosData } from './Data';

export default function AllsCategory({ navigation }) {
    const [categories, setCategories] = useState([]);
    const [animation] = useState(new Animated.Value(0));

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
        const order = ['Cardio', 'Biceps', 'Cuadriceps', 'Espalda', 'Gluteos', 'Abdominales', 'Triceps', 'Yoga', 'Peso_corporal', 'Hombro', 'Pecho',];
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
                        <Animated.View style={[styles.carouselItem, getCategoryAnimationStyle(index)]}>
                            <Image source={{ uri: item.fondo }} style={styles.categoryBackgroundImage} />
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
        padding: 10,
        height: '600%',

    },
    categoryBackgroundImage: {
        width: 170,
        height: 200,
        borderRadius: 10,
        marginLeft: 10,
    },
    categoryName: {
        position: 'absolute',
        top: 160,
        left: 20,
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    carouselItem: {
        marginRight: 10,
    },
});
