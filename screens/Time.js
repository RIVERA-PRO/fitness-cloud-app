import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Timer from '../components/Timer';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function Time() {
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


        <LinearGradient colors={['#D71920', '#fff', '#fff', '#fff']} style={styles.scrollViewTime}>
            <View style={styles.titleRutina}>
                <Ionicons name="checkmark-circle" size={23} color='#fff' />
                <Text style={styles.titleRutinaText}>Arma tu rutina en 7 dias</Text>
                <AntDesign name="arrowdown" size={20} color='#fff' />
            </View>


            <TouchableOpacity onPress={navigateToRutina} style={styles.RutinaBtn}>
                <Text style={styles.RutinaText}> Dia 1</Text>
                <MaterialCommunityIcons name="timer" size={22} color='#fff' style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToRutina2} style={styles.RutinaBtn}>
                <Text style={styles.RutinaText}> Dia 2</Text>
                <MaterialCommunityIcons name="timer" size={22} color='#fff' style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToRutina3} style={styles.RutinaBtn}>
                <Text style={styles.RutinaText}> Dia 3</Text>
                <MaterialCommunityIcons name="timer" size={22} color='#fff' style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToRutina4} style={styles.RutinaBtn}>
                <Text style={styles.RutinaText}> Dia 4</Text>
                <MaterialCommunityIcons name="timer" size={22} color='#fff' style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToRutina5} style={styles.RutinaBtn}>
                <Text style={styles.RutinaText}> Dia 5</Text>
                <MaterialCommunityIcons name="timer" size={22} color='#fff' style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToRutina6} style={styles.RutinaBtn}>
                <Text style={styles.RutinaText}> Dia 6</Text>
                <MaterialCommunityIcons name="timer" size={22} color='#fff' style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToRutina7} style={styles.RutinaBtn}>
                <Text style={styles.RutinaText}> Dia 7</Text>
                <MaterialCommunityIcons name="timer" size={22} color='#fff' style={styles.icon} />
            </TouchableOpacity>
        </LinearGradient>


    );
}

const styles = StyleSheet.create({
    scrollViewTime: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        height: '100%'
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
        borderRadius: 10
    },

    RutinaBtn: {
        backgroundColor: '#D71920',
        padding: 15,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 50,
        width: '100%',
        justifyContent: 'space-around',
        borderRadius: 10,
        shadowColor: 'rgba(215, 25, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    },
    RutinaText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    titleRutinaText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }

});
