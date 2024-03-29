import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, image, style, Platform } from 'react-native';
import Home from '../screens/Home'
import Ejercicios from '../screens/Ejercicios'
import Detail from '../screens/Detail'
import Perfil from '../screens/Perfil'
import Gluteos from '../screens/Gluteos'
import Abdominales from '../screens/Abdominales'
import Pecho from '../screens/Pecho'
import Biceps from '../screens/Biceps'
import Triceps from '../screens/Triceps'
import Espalda from '../screens/Espalda'
import Cuadriceps from '../screens/Cuadriceps'
import Hombros from '../screens/Hombros'
import Peso_corporal from '../screens/Peso_corporal'
import Yoga from '../screens/Yoga'
import Isquiotibiales from '../screens/Isquiotibiales'
import Banda_elastica from '../screens/Banda_elastica'
import Pantorrillas from '../screens/Pantorrillas'
import Cardio from '../screens/Cardio'
import Categorias from '../screens/Categorias'
import Time from '../screens/Time'
import Rutina from "../screens/Rutina";
import Rutina2 from "../screens/Rutina2";
import Rutina3 from "../screens/Rutina3";
import Rutina4 from "../screens/Rutina4";
import Rutina5 from "../screens/Rutina5";
import Rutina6 from "../screens/Rutina6";
import Rutina7 from "../screens/Rutina7";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

function BottomTabsNavigation() {




    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottonm: 25,
                    left: 20,
                    right: 20,
                    borderTopColor: 'tranparent',
                    borderRadius: 15,
                    height: 56,
                    elevation: 0,

                },
                labelStyle: {
                    fontSize: 11,
                    marginBottom: 3,
                },
                activeTintColor: '#fff',
                inactiveTintColor: 'rgba(255, 255, 255, 0.5)',


            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    ),
                }}
            />

            < Tab.Screen name="Categorias" component={Categorias}
                options={{
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10
                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Categorias',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="fitness-center" size={25} color={color} />
                    ),
                }} />

            <Tab.Screen
                name="Ejercicios"
                component={Ejercicios}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View
                            style={{
                                top: Platform.OS === "ios" ? -20 : -20,
                                width: Platform.OS === "ios" ? 45 : 55,
                                height: Platform.OS === "ios" ? 45 : 55,
                                borderRadius: Platform.OS === "ios" ? 25 : 30,
                                position: 'absolute',
                                bottom: 10,
                                backgroundColor: '#FFF',
                                alignItems: 'center',
                                justifyContent: 'center',
                                shadowColor: '#000',
                                shadowOffset: { width: 10, height: 20 },
                                shadowOpacity: 10.25,
                                shadowRadius: 300,
                                elevation: 7,

                            }}
                        >
                            <Feather name="plus" size={30} color="#D71920" />
                        </View>
                    ),
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10
                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Time"
                component={Time}
                options={{
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#fff',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Time',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="timer" size={24} color={color} />
                    ),
                }}
            />

            < Tab.Screen name="Perfil" component={Perfil}
                options={{
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10
                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="favorite" size={24} color={color} />
                    ),
                }} />

            < Tab.Screen name="Detail" component={Detail}
                options={{
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10
                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Details',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="info" size={24} color={color} />
                    ),
                }} />
            <Tab.Screen
                name="Gluteos"
                component={Gluteos}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Gluteos',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Abdominales"
                component={Abdominales}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Abdominales',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Pecho"
                component={Pecho}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Pecho',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Biceps"
                component={Biceps}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Biceps',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Triceps"
                component={Triceps}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10
                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Triceps',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Espalda"
                component={Espalda}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Espalda',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Cuadriceps"
                component={Cuadriceps}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10
                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Cuadriceps',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />

            <Tab.Screen
                name="Hombros"
                component={Hombros}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Hombros',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Peso_corporal"
                component={Peso_corporal}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Peso_corporal',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Yoga"
                component={Yoga}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Yoga',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />

            <Tab.Screen
                name="Cardio"
                component={Cardio}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Cardio',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Isquiotibiales"
                component={Isquiotibiales}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Isquiotibiales',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />

            <Tab.Screen
                name="Pantorrillas"
                component={Pantorrillas}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Pantorrillas',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Banda_elastica"
                component={Banda_elastica}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Banda_elastica',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Rutina"
                component={Rutina}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Rutina',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />

            <Tab.Screen
                name="Rutina2"
                component={Rutina2}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Rutina2',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />


            <Tab.Screen
                name="Rutina3"
                component={Rutina3}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Rutina3',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />


            <Tab.Screen
                name="Rutina4"
                component={Rutina4}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Rutina4',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />

            <Tab.Screen
                name="Rutina5"
                component={Rutina5}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Rutina5',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />

            <Tab.Screen
                name="Rutina6"
                component={Rutina6}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Rutina6',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Rutina7"
                component={Rutina7}
                options={({ route }) => ({
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarVisible: false, // Ocultar la pestaña "Gluteos" en la barra de navegación
                    tabBarStyle: {
                        backgroundColor: '#D71920',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                        borderRadius: 100,
                        marginBottom: 10,
                        margin: 10

                    },
                    activeTintColor: '#D71920',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Rutina7',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />

        </Tab.Navigator >
    );
}

export default BottomTabsNavigation;
