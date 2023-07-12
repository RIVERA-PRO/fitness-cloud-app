import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Animated, Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import imagebg from '../assets/home.png'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [series, setSeries] = useState(1);
    const [repetitions, setRepetitions] = useState(1);
    const [timerBorderColor, setTimerBorderColor] = useState('#000000');
    const [progress, setProgress] = useState(0);
    const [animationValue] = useState(new Animated.Value(0));
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
    const handleStart = () => {
        setIsActive(true);
        setTimerBorderColor('#D71920');
    };

    const handlePause = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setSeconds(0);
        setMinutes(0);
        setIsActive(false);
        setTimerBorderColor('#000000');
        setProgress(0);
    };

    const handleSeriesIncrement = () => {
        setSeries(series + 1);
    };

    const handleSeriesDecrement = () => {
        if (series > 1) {
            setSeries(series - 1);
        }
    };

    const handleRepetitionsIncrement = () => {
        setRepetitions(repetitions + 1);
    };

    const handleRepetitionsDecrement = () => {
        if (repetitions > 1) {
            setRepetitions(repetitions - 1);
        }
    };

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                if (seconds === 59) {
                    setMinutes((minutes) => minutes + 1);
                    setSeconds(0);
                } else {
                    setSeconds((seconds) => seconds + 1);
                }

                const totalSeconds = minutes * 60 + seconds;
                const progressPercentage = (totalSeconds / (series * repetitions * 60)) * 100;
                setProgress(progressPercentage);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <Animated.View style={[{ transform: [{ translateY }] }]}>
            <ImageBackground source={imagebg} style={styles.scrollViewTime} resizeMode="cover" >
                <View style={styles.container}>

                    <View style={[styles.timerContainer]}>
                        <Text style={styles.timer}>
                            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={handlePause} style={styles.button}>
                            <FontAwesome name="stop" size={20} color="#FFF" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleStart} style={styles.button}>
                            <AntDesign name="caretright" size={22} color="#FFF" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleReset} style={styles.button}>
                            <MaterialCommunityIcons name="restart" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.rowContain}>
                        <View style={styles.row}>
                            <Text style={styles.labelText}>Series</Text>
                            <View style={styles.counterContainer}>
                                <TouchableOpacity onPress={handleSeriesDecrement}>
                                    <Text style={styles.button2}>-</Text>
                                </TouchableOpacity>
                                <Text style={[styles.label, styles.counterLabel]}>{series}</Text>
                                <TouchableOpacity onPress={handleSeriesIncrement}>
                                    <Text style={styles.button2}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.labelText}>Repeticiones</Text>
                            <View style={styles.counterContainer}>
                                <TouchableOpacity onPress={handleRepetitionsDecrement}>
                                    <Text style={styles.button2}>-</Text>
                                </TouchableOpacity>
                                <Text style={[styles.label, styles.counterLabel]}>{repetitions}</Text>
                                <TouchableOpacity onPress={handleRepetitionsIncrement}>
                                    <Text style={styles.button2}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </ImageBackground>
        </Animated.View>
    );
}; const styles = StyleSheet.create({
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
});

export default Timer;