import * as React from 'react';
import { Text, View, Button, Image, ScrollView, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ResultsScreen from '../screens/ResultsScreen';
import Feather from 'react-native-vector-icons/Feather'
import SpanishQuiz from "../screens/quizScreens/SpanishQuiz";
import ItalianQuiz from "../screens/quizScreens/ItalianQuiz";
import PolishQuiz from "../screens/quizScreens/PolishQuiz";
import EnglishQuiz from "../screens/quizScreens/EnglishQuiz";
import NorwegianQuiz from "../screens/quizScreens/NorwegianQuiz";
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
      <Drawer.Navigator  screenOptions={{
        drawerActiveBackgroundColor: '#1E90FF',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          fontSize: 16,
        }}}>
        <Drawer.Screen name="HomeScreen" component={TabNavigator}
        options={{title: 'Home Screen', headerShown: false, drawerIcon:() => ( <Feather name="home" size={20} color="C6C6C6" style={{marginLeft: 10 }} />) }} />
        <Drawer.Screen name="Login" component={LoginScreen}
        options={{ title: 'Login', headerShown: false, drawerIcon:() => ( <Feather name="meh" size={20} color="C6C6C6" style={{marginLeft: 10 }} />) }} />
        <Drawer.Screen name="ResultsScreen" component={ResultsScreen}
        options={{ title: 'Results',  headerShown: false, drawerIcon:() => ( <Feather name="save" size={20} color="C6C6C6" style={{marginLeft: 10  }} />) }} />
        <Drawer.Screen name="Italian" component={ItalianQuiz}
        options={{ title: 'Italian Quiz', headerShown: false, drawerIcon:() => (  <Feather name="coffee" size={20} color="C6C6C6" style={{ marginLeft: 10 }} />) }} />
        <Drawer.Screen name="Polish" component={PolishQuiz}
        options={{ title: 'Polish Quiz', headerShown: false, drawerIcon:() => (  <Feather name="activity" size={20} color="C6C6C6" style={{ marginLeft: 10 }} />) }} />
        <Drawer.Screen name="English" component={EnglishQuiz}
        options={{ title: 'English Quiz', headerShown: false, drawerIcon:() => (  <Feather name="cloud-rain" size={20} color="C6C6C6" style={{ marginLeft: 10 }} />) }} />
        <Drawer.Screen name="Spanish" component={SpanishQuiz}
        options={{ title: 'Spanish Quiz', headerShown: false, drawerIcon:() => (  <Feather name="sun" size={20} color="C6C6C6" style={{ marginLeft: 10 }} />) }} />
        <Drawer.Screen name="Norwegian" component={NorwegianQuiz}
        options={{ title: 'Norwegian Quiz', headerShown: false, drawerIcon:() => (  <Feather name="wind" size={20} color="C6C6C6" style={{ marginLeft: 10 }} />) }} />

      </Drawer.Navigator>
    );
  }


export default MyDrawer;
