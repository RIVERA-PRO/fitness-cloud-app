import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, } from 'react-native';
import logo from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import image from '../assets/Cloud.png'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';

export default function Header() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const navigation = useNavigation();

    const goToHome = () => {
        navigation.navigate('Home');
        setModalVisible(!isModalVisible);
    };

    const goToProfile = () => {
        navigation.navigate('Perfil');
        setModalVisible(!isModalVisible);
    };

    const goToTime = () => {
        navigation.navigate('Time');
        setModalVisible(!isModalVisible);
    };
    const goToEjercicios = () => {
        navigation.navigate('Ejercicios');
        setModalVisible(!isModalVisible);
    };
    const goToCategorias = () => {
        navigation.navigate('Categorias');
        setModalVisible(!isModalVisible);
    };

    const openLinkedInProfile = () => {
        const linkedInURL = 'https://www.linkedin.com/in/juan-rivera-9ba866215/'; // Reemplaza con tu URL de LinkedIn
        Linking.openURL(linkedInURL);
    };

    const openWebsite = () => {
        const websiteURL = 'https://www.juan-rivera-developer.com/'; // Reemplaza con tu URL del sitio web
        Linking.openURL(websiteURL);
    };

    const openWhatsAppChat = () => {
        const phoneNumber = '1234567890'; // Reemplaza con tu número de teléfono
        const whatsappURL = `https://wa.me/qr/AHQDYWM7EKATH1`;
        Linking.openURL(whatsappURL);
    };
    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={toggleModal}>
                <View style={styles.logoContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={styles.logoText}>Fitness Cloud</Text>
                    </View>
                    <Text style={styles.dateText}>{getCurrentDate()}</Text>
                    <EvilIcons name="navicon" size={24} color="#fff" />
                </View>
            </TouchableOpacity>
            <Modal
                isVisible={isModalVisible}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                swipeDirection="left"
                onSwipeComplete={toggleModal}
                onBackdropPress={toggleModal}
                style={styles.modal}
            >


                <View style={styles.modalContent} >

                    <Image source={image} style={styles.img} />
                    <Text style={styles.dateText}>{getCurrentDate()}</Text>
                    <View style={styles.navBtns}>
                        <TouchableOpacity onPress={goToHome} style={styles.btnNav}>
                            <FontAwesome name="home" size={20} color='#D71920' />
                            <Text style={styles.buttonText}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={goToTime} style={styles.btnNav}>
                            <MaterialCommunityIcons name="timer" size={20} color='#D71920' />
                            <Text style={styles.buttonText}>Rutinas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={goToProfile} style={styles.btnNav}>
                            <MaterialIcons name="favorite" size={20} color='#D71920' />
                            <Text style={styles.buttonText}>Actividad</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={goToEjercicios} style={styles.btnNav}>
                            <MaterialIcons name="fitness-center" size={20} color='#D71920' />
                            <Text style={styles.buttonText}>Ejercicios</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={goToCategorias} style={styles.btnNav}>
                            <MaterialIcons name="fitness-center" size={20} color='#D71920' />
                            <Text style={styles.buttonText}>Categorias</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={styles.btnNav}>
                            <MaterialIcons name="logout" size={20} color="#D71920" />
                            <Text style={styles.buttonText}>Cerrar</Text>
                        </TouchableOpacity>

                        <Text style={styles.text}>Contacto del desarrollador</Text>
                        <View style={styles.social}>
                            <TouchableOpacity onPress={openLinkedInProfile} style={styles.btnNav}>
                                <FontAwesome name="linkedin" size={20} color="#D71920" />

                            </TouchableOpacity>
                            <TouchableOpacity onPress={openWebsite} style={styles.btnNav}>
                                <FontAwesome name="globe" size={20} color="#D71920" />

                            </TouchableOpacity>
                            <TouchableOpacity onPress={openWhatsAppChat} style={styles.btnNav}>
                                <FontAwesome name="whatsapp" size={20} color="#D71920" />

                            </TouchableOpacity>
                        </View>
                    </View>


                </View>

            </Modal>
        </View>

    );
}

const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flexDirection: 'column',
        padding: 20,

    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 5
    },
    logo: {
        width: 25,
        height: 25,
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,

    },
    logoText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    dateText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13,
        marginLeft: 30
    },

    button: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        elevation: 5,

    },
    buttonText: {
        color: 'rgba(0, 0, 0, 0.8)',
        fontWeight: 'bold',

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        width: '80%',
        height: '100%',

    },
    closeButton: {
        marginTop: 10,
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 8,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    img: {
        width: '100%',
        height: 140,
        objectFit: 'cover'
    },
    navBtns: {
        marginTop: 30
    },

    btnNav: {
        flexDirection: 'row',
        gap: 10,
        borderRadius: 8,
        padding: 10,
        margin: 9,
        borderBottomWidth: 0.3,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    social: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    text: {
        textAlign: 'center',
        marginTop: 100
    },
    modal: {
        margin: 0
    }

});
