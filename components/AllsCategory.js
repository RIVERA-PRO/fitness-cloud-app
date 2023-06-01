import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ejerciciosData } from './Data';

export default function AllsCategory({ navigation }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const uniqueCategories = removeDuplicates(ejerciciosData, 'fondo');
        const shuffledCategories = shuffle(uniqueCategories);
        setCategories(shuffledCategories);
    }, []);

    const selectCategory = (category) => {
        navigation.navigate(category.categoria); // Redirigir a la página correspondiente
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

    const shuffle = (array) => {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    return (
        <ScrollView horizontal={true} style={styles.scrollView}>

            {categories.length > 0 ? (
                categories.map((item) => (
                    <TouchableOpacity key={item.categoria} onPress={() => selectCategory(item)}>

                        <View style={styles.carouselItem}>
                            <Image source={{ uri: item.fondo }} style={styles.categoryBackgroundImage} />
                            <Text style={styles.categoryName}>{item.categoria}</Text>
                        </View>
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
        height: '470%',
        backgroundColor: '#266234',
        paddingTop: 50,
        marginTop: 30
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
