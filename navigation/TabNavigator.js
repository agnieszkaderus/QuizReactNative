import React from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity, ImageBackground} from "react-native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ResultsScreen from "../screens/ResultsScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={{
            tabBarInactiveTintColor: "black",
            tabBarActiveTintColor: '#005fc7',
            tabBarShowLabel: false,
            tabBarStyle: {backgroundColor: "rgba(255,255,255,1)", height: 60, position: 'absolute', bottom: 0, left: 0, right: 0, elevation: 0, ...styles.shadow },
        }}>

            <Tab.Screen name="HomeScreen2" component={HomeScreen}  options={{
                tabBarIcon: ({color, size}) => (
                    <Feather name="home" color={color} size={size} />
                ), tabBarShowLabel: true, tabBarLabelStyle: {fontSize: 15}, title: "HOME"

            }} />
            <Tab.Screen name="Login" component={LoginScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Feather name="meh" color={color} size={size} />
                ), tabBarShowLabel: true,tabBarLabelStyle: {fontSize: 15, display: 'flex'}, title: "LOGIN",
            }} />
            <Tab.Screen name="Results" component={ResultsScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Feather name="check" color={color} size={size} />
                ),  tabBarShowLabel: true,tabBarLabelStyle: {fontSize: 15}, title: "RESULTS"
            }} />
        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000000',
        shadowOffset:   {
            width: 20,
            height: 20,
        },
        shadowOpacity: 0.55,
        shadowRadius: 3.5,
        elevation: 5
    },
});

export default TabNavigator;
{/*
headerShown: true,
    headerStyle: {
    height: 60,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: 'rgb(36,178,255)',
        shadowColor: '#000',
        elevation: 25
},
headerLeft: () => (
    <View>
        <TouchableOpacity style={{marginLeft: 15}}>
            <MaterialCommunityIcons name='home' size={28} color='#000' />
        </TouchableOpacity>
    </View>
),

    */}
