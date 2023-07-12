import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { Animated, Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import imagebg from '../assets/home.png'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [series, setSeries] = useState(1);
    const [repetitions, setRepetitions] = useState(1);
    const [timerBorderColor, setTimerBorderColor] = useState('#000000');
    const [animationValue] = useState(new Animated.Value(0));
    const [inputTime, setInputTime] = useState('');
    const [isTimerFinished, setIsTimerFinished] = useState(false);
    const [soundObject, setSoundObject] = useState(null);

    const startAnimation = () => {
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 360,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    };

    useFocusEffect(
        React.useCallback(() => {
            startAnimation();
            return () => {
                // Reinicia la animación cuando la pantalla pierde el foco
                animationValue.setValue(0);
            };

        }, [])

    );

    const translateY = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 0], // Inicia desde 200 unidades hacia abajo y se desplaza hacia arriba
    });


    const loadSound = async () => {
        const sound = new Audio.Sound();
        try {
            await sound.loadAsync(require('../assets/sound.mp3'));
            setSoundObject(sound); // Asignar la instancia del sonido a la variable de estado
        } catch (error) {
            console.log('Error al cargar el sonido:', error);
        }
    };

    useEffect(() => {
        loadSound();

        return () => {
            if (soundObject) {
                soundObject.unloadAsync();
            }
        };


    }, []);




    const handleStartManual = async () => {
        const inputSeconds = parseInt(inputTime, 10);
        if (!isNaN(inputSeconds) && inputSeconds > 0) {
            setTime(inputSeconds);
            setIsActive(true);
            setTimerBorderColor('#D71920');
            try {
                if (soundObject) {
                    await soundObject.replayAsync(); // Reproducir el sonido utilizando soundObject
                }
            } catch (error) {
                console.log('Error al reproducir el sonido:', error);
            }
        }
    };

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }

        if (time === 0) {
            setIsActive(false);
            setTimerBorderColor('#000000');
            const playSoundAgain = async () => {
                try {
                    if (soundObject) {
                        await soundObject.replayAsync(); // Reproducir el sonido nuevamente utilizando soundObject
                    }
                } catch (error) {
                    console.log('Error al reproducir el sonido:', error);
                }
            };

            playSoundAgain();
        }

        return () => clearInterval(interval);
    }, [isActive, time]);


    return (
        <Animated.View style={[{ transform: [{ translateY }] }]}>
            <ImageBackground source={imagebg} style={styles.scrollViewTime} resizeMode="cover" >
                <View style={styles.container}>
                    <View style={[styles.timerContainer]}>
                        <Text style={styles.timer}>
                            {Math.floor(time / 60).toString().padStart(2, '0')}:{(time % 60).toString().padStart(2, '0')}
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={handleStartManual} style={styles.button}>
                            <AntDesign name="caretright" size={22} color="#FFF" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsActive(false)} style={styles.button}>
                            <FontAwesome name="stop" size={20} color="#FFF" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setTime(0)} style={styles.button}>
                            <MaterialCommunityIcons name="restart" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.inputTimer}
                        keyboardType="numeric"
                        placeholder="Ingrese el tiempo en segundos"
                        placeholderTextColor="#999999"
                        value={inputTime}
                        onChangeText={setInputTime}
                    />
                    <View style={styles.rowContain}>
                        <View style={styles.row}>
                            <Text style={styles.labelText}>Series</Text>
                            <View style={styles.counterContainer}>
                                <TouchableOpacity onPress={() => setSeries(series + 1)}>
                                    <Text style={styles.button2}>+</Text>
                                </TouchableOpacity>
                                <Text style={[styles.label, styles.counterLabel]}>{series}</Text>
                                <TouchableOpacity onPress={() => setSeries(series > 1 ? series - 1 : 1)}>
                                    <Text style={styles.button2}>-</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.labelText}>Repeticiones</Text>
                            <View style={styles.counterContainer}>
                                <TouchableOpacity onPress={() => setRepetitions(repetitions + 1)}>
                                    <Text style={styles.button2}>+</Text>
                                </TouchableOpacity>
                                <Text style={[styles.label, styles.counterLabel]}>{repetitions}</Text>
                                <TouchableOpacity onPress={() => setRepetitions(repetitions > 1 ? repetitions - 1 : 1)}>
                                    <Text style={styles.button2}>-</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </Animated.View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 30,
        paddingTop: 200,
        height: 850
    },
    rowContain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 30,
    },
    row: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        width: 30,
        textAlign: 'center',
    },
    labelText: {
        alignItems: 'center',
        marginBottom: 6,
        color: '#fff',
    },
    button: {
        backgroundColor: '#D71920',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 100,
        marginLeft: 4,
        fontSize: 16,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10.25,
        shadowRadius: 30,
        elevation: 5,
    },
    button2: {
        backgroundColor: '#D71920',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 100,
        marginLeft: 4,
        fontSize: 17,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#ffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10.25,
        shadowRadius: 30,
        elevation: 5,

    },
    timerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,

        marginBottom: 10,
        position: 'relative',
        marginTop: 140,

    },


    timer: {
        fontSize: 70,
        fontWeight: 'bold',
        color: '#fff',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterLabel: {
        textAlign: 'center',
        color: '#fff',

        fontWeight: 'bold'
    },

    inputTimer: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#fff',
        borderRadius: 8,
        padding: 6
    }
});

export default Timer;