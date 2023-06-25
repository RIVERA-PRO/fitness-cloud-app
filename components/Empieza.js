import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imagen from '../assets/Empieza.png';
import imagen2 from '../assets/Cloud.png';

export default function Empieza() {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        const randomNum = Math.random();
        const image = randomNum < 0.5 ? imagen : imagen2;
        setSelectedImage(image);
    }, []);

    const handleImagePress = () => {
        navigation.navigate('Ejercicios');
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handleImagePress}>
            {selectedImage && (
                <Image source={selectedImage} style={styles.image} />
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        height: '100%',
    },
    image: {
        width: '100%',
        height: 170,
        borderRadius: 8,
        shadowColor: '#D71920',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 50,

    },
});
