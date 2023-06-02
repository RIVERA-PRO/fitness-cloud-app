import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList, ImageBackground, TextInput, ScrollView } from 'react-native';
import { ejerciciosData } from '../components/Data';
import Header from '../components/Header';
export default function Ejercicios({ navigation }) {
    const [exercises, setExercises] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredExercises, setFilteredExercises] = useState([]);

    useEffect(() => {
        const shuffledExercises = shuffle(ejerciciosData);
        const slicedExercises = shuffledExercises.slice(0, 123);
        setExercises(slicedExercises);
        setFilteredExercises(slicedExercises);
    }, []);

    useEffect(() => {
        handleFilter();
    }, [exercises, selectedCategory, searchText]);

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

    const goToDetail = (exerciseId) => {
        navigation.navigate('Detail', { exerciseId });
    };

    const renderExerciseItem = ({ item }) => (
        <TouchableOpacity onPress={() => goToDetail(item.id)}>
            <View style={styles.exerciseItem}>
                <View style={styles.imageContainer}>
                    <ImageBackground source={{ uri: item.img }} style={styles.exerciseImage} />
                    <Text style={styles.tileEjercice}> {item.title.slice(0, 17)}..</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    const handleFilter = () => {
        let filteredData = exercises;

        if (selectedCategory) {
            filteredData = filteredData.filter((exercise) => exercise.categoria === selectedCategory);
        }

        if (searchText) {
            filteredData = filteredData.filter((exercise) =>
                exercise.title.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        setFilteredExercises(filteredData);
    };

    const handleCategoryFilter = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
        }
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.titleCantidad}>
                <Text style={styles.textoTitle}>Ejercicios </Text>
                <Text style={styles.textoCantidad}>{exercises.length}</Text>
            </View>
            <View style={styles.filtros}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar ejercicio"
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.categoryFilter}>
                        {['Pecho', 'Abdominales', 'Gluteos', 'Cuadriceps', 'Espalda', 'Yoga', 'Biceps', 'Triceps', 'Cardio', 'Peso_corporal'].map((category) => (
                            <TouchableOpacity
                                key={category}
                                style={[
                                    styles.filterItem,
                                    selectedCategory === category && styles.filterItemSelected,
                                ]}
                                onPress={() => handleCategoryFilter(category)}
                            >
                                <Text style={styles.filterItemLabel}>{category}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
            <FlatList
                data={filteredExercises}
                renderItem={renderExerciseItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.scrollView}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,

    },
    scrollView: {
        flexGrow: 1,
        marginTop: 20,
        alignItems: 'center',

    },
    exerciseItem: {
        flex: 1,
        marginRight: 25,
        marginBottom: 10,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 10,

    },
    exerciseImage: {
        width: 155,
        height: 150,
        borderRadius: 8,
        overflow: 'hidden', // Añade esta línea
    },
    imageContainer: {
        flex: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    searchInput: {
        height: 40,
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginBottom: 10,

    },
    categoryFilter: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        marginTop: 10,
        height: 40
    },
    filterItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: 'rgba(215, 25, 32, 0.9)',
        padding: 7,
        borderRadius: 8

    },
    filterTitle: {
        marginRight: 10,
        fontSize: 16,
        color: '#fff',
    },
    filterItemLabel: {
        color: '#fff',
    },
    filterItemSelected: {
        borderBottomWidth: 2,
        borderBottomColor: '#000',
    },
    tileEjercice: {
        color: '#000',
        paddingTop: 10
    },
    filtros: {
        paddingHorizontal: 20,
    },
    textoTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
        fontWeight: 'bold',

    },
    textoCantidad: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: 'rgba(215, 25, 0, 0.8)',
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
        padding: 20
    }
});
