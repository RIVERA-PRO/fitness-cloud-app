import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [series, setSeries] = useState(1);
    const [repetitions, setRepetitions] = useState(1);

    const handleStart = () => {
        setIsActive(true);
    };

    const handlePause = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setSeconds(0);
        setMinutes(0);
        setIsActive(false);
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
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.label}>Series</Text>
                <TouchableOpacity onPress={handleSeriesDecrement}>
                    <Text style={styles.button}>-</Text>
                </TouchableOpacity>
                <Text style={styles.label}>{series}</Text>
                <TouchableOpacity onPress={handleSeriesIncrement}>
                    <Text style={styles.button}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Repeticiones</Text>
                <TouchableOpacity onPress={handleRepetitionsDecrement}>
                    <Text style={styles.button}>-</Text>
                </TouchableOpacity>
                <Text style={styles.label}>{repetitions}</Text>
                <TouchableOpacity onPress={handleRepetitionsIncrement}>
                    <Text style={styles.button}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.timerContainer}>
                <Text style={styles.timer}>
                    {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleStart} style={styles.button}>
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePause} style={styles.button}>
                    <Text style={styles.buttonText}>Pause</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleReset} style={styles.button}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        marginRight: 10,
    },
    button: {
        backgroundColor: '#ccc',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
        marginLeft: 5,
        fontSize: 16,
    },
    timerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 4,
        width: 120,
        height: 80,
        marginBottom: 10,
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
});
export default Timer;