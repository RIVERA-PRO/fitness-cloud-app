import React from 'react';
import { View, StyleSheet, ScrollView, SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoriasY from '../components/CategoriasY';
import Header from '../components/HeaderBlanco';
import { LinearGradient } from 'expo-linear-gradient';
export default function Categorias() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <LinearGradient colors={['#AC1929', '#D71920']} style={styles.header}>
                    <Header />
                </LinearGradient>

            </View>

            <ScrollView>
                <CategoriasY navigation={navigation} />
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#D71920'
    },
    header: {
        width: '100%',
        marginBottom: 20,
        borderRadius: 20,
        position: 'absolute',
        zIndex: 2,
        top: 0,
        height: 120,
        paddingTop: 50,


    },
});
