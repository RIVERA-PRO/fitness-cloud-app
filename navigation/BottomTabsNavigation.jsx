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
import Cardio from '../screens/Cardio'
import Categorias from '../screens/Categorias'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
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
                inactiveTintColor: '#000',


            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarStyle: {
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',

                    },
                    activeTintColor: '#fff',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Ejercicios"
                component={Ejercicios}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View
                            style={{
                                top: Platform.OS === "ios" ? -30 : -30,
                                width: Platform.OS === "ios" ? 50 : 60,
                                height: Platform.OS === "ios" ? 50 : 60,
                                borderRadius: Platform.OS === "ios" ? 25 : 30,
                                position: 'absolute',
                                bottom: 10,
                                backgroundColor: '#d71b7b',
                                alignItems: 'center',
                                justifyContent: 'center',
                                shadowColor: '#fff',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.25,
                                shadowRadius: 3,
                                elevation: 5,
                            }}
                        >
                            <FontAwesome name="plus" size={size} color="#fff" />
                        </View>
                    ),
                    tabBarStyle: {
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                    },
                    activeTintColor: '#000',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                }}
            />


            < Tab.Screen name="Categorias" component={Categorias}
                options={{
                    tabBarStyle: {
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                    },
                    activeTintColor: '#fff',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Categorias',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="fitness-center" size={28} color={color} />
                    ),
                }} />
            < Tab.Screen name="Perfil" component={Perfil}
                options={{
                    tabBarStyle: {
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                    },
                    activeTintColor: '#fff',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-alt" size={24} color={color} />
                    ),
                }} />

            < Tab.Screen name="Detail" component={Detail}
                options={{
                    tabBarButton: () => null, // Ocultar el botón del tab
                    tabBarStyle: {
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                    },
                    activeTintColor: '#fff',
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
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',

                    },
                    activeTintColor: '#fff',
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
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',

                    },
                    activeTintColor: '#fff',
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
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',

                    },
                    activeTintColor: '#fff',
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
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',

                    },
                    activeTintColor: '#fff',
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
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',

                    },
                    activeTintColor: '#fff',
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
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',

                    },
                    activeTintColor: '#fff',
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
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',
                    },
                    activeTintColor: '#fff',
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
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',

                    },
                    activeTintColor: '#fff',
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
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',

                    },
                    activeTintColor: '#fff',
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
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',

                    },
                    activeTintColor: '#fff',
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
                        backgroundColor: '#d71b7b',
                        height: 56,
                        elevation: 0,
                        position: 'absolute',

                    },
                    activeTintColor: '#fff',
                    inactiveTintColor: '#9B9B9B',
                    headerShown: false,
                    tabBarLabel: 'Cardio',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="category" size={24} color={color} />
                    ),
                })}
            />

        </Tab.Navigator >
    );
}

export default BottomTabsNavigation;
