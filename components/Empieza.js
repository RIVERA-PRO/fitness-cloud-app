import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import imagen from '../assets/Empieza.png';
import imagen2 from '../assets/Cloud.png';

export default function Empieza() {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        // Generar un número aleatorio entre 0 y 1
        const randomNum = Math.random();
        // Asignar la imagen según el número aleatorio
        const image = randomNum < 0.5 ? imagen : imagen2;
        setSelectedImage(image);
    }, []);

    return (
        <View style={styles.container}>
            {selectedImage && <Image source={selectedImage} style={styles.image} />}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        padding: 20,
        height: '100%'
    },
    image: {
        width: '100%',
        height: 170,
        borderRadius: 8,

    },
});
