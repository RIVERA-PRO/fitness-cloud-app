import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import bg from '../assets/home.png';
import HomeTitle from '../components/HomeTitle';
import AllsCategory from '../components/AllsCategory';
import AllEjercicios from '../components/AllEjercicios';
import MoreEjercice from '../components/MoreEjercice';
export default function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* <ImageBackground source={bg} style={styles.backgroundImage}>
          <View style={styles.seccion}>
              <HomeTitle />
          </View>
      </ImageBackground> */}



            <ScrollView style={styles.scrollViewHome}>
                <AllEjercicios navigation={navigation} />

                <Text style={styles.textMore}>Caegorias</Text>
                <AllsCategory navigation={navigation} />

            </ScrollView>
            <ScrollView style={styles.scrollViewHome}>
                <MoreEjercice navigation={navigation} />
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        height: "200%",
    },
    scrollViewHome: {
        height: "100%",
        flex: 1,
        gap: 30
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: "100%"
    },
    seccion: {
        height: "100%",
        padding: 20,
        justifyContent: 'space-around',
        alignContent: 'center',
        marginTop: 100
    },
    seccion2: {
        height: "100%",
    },
});
