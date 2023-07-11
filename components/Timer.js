import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Animated, Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
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
        <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
            <View style={styles.container}>

                <View style={[styles.timerContainer, { borderColor: timerBorderColor }]}>
                    <View style={[styles.progressBarContainer, { transform: [{ rotate: `${progress * 3.6}deg` }] }]}>
                        <View style={styles.progressBar} />
                    </View>
                    <Text style={styles.timer}>
                        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleStart} style={styles.button}>
                        <Text style={styles.buttonText}>Inicio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePause} style={styles.button}>
                        <Text style={styles.buttonText}>Pausa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleReset} style={styles.button}>
                        <Text style={styles.buttonText}>Reiniciar</Text>
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
        </Animated.View>
    );
}; const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 30,

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
    },
    button: {
        backgroundColor: '#D71920',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 100,
        marginLeft: 4,
        fontSize: 16,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
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
        color: '#ffff'

    },
    timerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderRadius: 100,
        width: 150,
        height: 150,
        marginBottom: 10,
        position: 'relative',
    },
    progressBarContainer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: '100%',
        backgroundColor: '#ccc',
        overflow: 'hidden',
    },


    timer: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
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
    },
});

export default Timer;