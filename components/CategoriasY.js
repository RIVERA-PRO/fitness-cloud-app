import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { ejerciciosData } from './Data';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
            return null;
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
            <View style={styles.titleCantidad}>
                <Text style={styles.textoTitle}>Categorias </Text>
                <Text style={styles.textoCantidad}>{categories.length}</Text>
            </View>

            <View style={styles.searchInputContainer}>
                <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Filtrar categorías"
                    value={filter}
                    onChangeText={setFilter}
                />
            </View>
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
        gap: 10,
        marginTop: 17
    },
    scrollView: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 30,

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
        fontSize: 16,
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
        marginHorizontal: 10,
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
        elevation: 100,
        marginLeft: 20,
        marginRight: 20,

    },
    searchIcon: {
        marginRight: 10,

    },
    input: {
        flex: 1,
        height: 40,
    },
    textoTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    textoCantidad: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        color: '#000',
        backgroundColor: '#fff',
        padding: 6,
        borderRadius: 100,
        width: 50,
        height: 30,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleCantidad: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    }
});