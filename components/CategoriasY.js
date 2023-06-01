import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { ejerciciosData } from './Data';
import { useNavigation } from '@react-navigation/native';

export default function CategoriasY({ navigation }) {
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState('');

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

    const renderCategoryItem = ({ item }) => {
        if (filter && !item.categoria.toLowerCase().includes(filter.toLowerCase())) {
            return null; // No renderizar si el filtro no coincide
        }

        return (
            <TouchableOpacity onPress={() => selectCategory(item)}>
                <View style={styles.carouselItem}>
                    <Image source={{ uri: item.fondo }} style={styles.categoryBackgroundImage} />
                    <Text style={styles.categoryName}>{item.categoria}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Filtrar categorías"
                value={filter}
                onChangeText={setFilter}
            />
            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.categoria}
                numColumns={2}
                contentContainerStyle={styles.scrollView}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        gap: 10,
        padding: 10,
    },
    scrollView: {

        paddingTop: 50,
        alignItems: 'center',
        gap: 10
    },
    categoryBackgroundImage: {
        width: 150,
        height: 200,
        borderRadius: 10,

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
        gap: 10
    },
    carouselItem: {
        flex: 1,
        marginBottom: 10,
        gap: 10,
        marginHorizontal: 10, // Agregar esta línea
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        gap: 10
    },
});