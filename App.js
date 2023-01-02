import * as React from 'react';
import { Text, View, Button, Image, ScrollView, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './navigation/MyDrawer';
import SplashScreen from "react-native-splash-screen";
import {useEffect} from "react";
import HomeScreen from "./screens/HomeScreen";
import Quiz1 from "./screens/quizScreens/Quiz1";
import Regulamin from "./components/modals/Regulamin";


const App = ({navigation}) => {

    //  useEffect(() => {
    // //     const timer = setTimeout(()=>{
    //          SplashScreen.hide()
    // //     }, 2000);
    // // SplashScreen.hide()
    //  }, [])

    return (

        <NavigationContainer>
            <Regulamin/>
           <MyDrawer/>
        {/*<Quiz1/>*/}
        </NavigationContainer>
    )}


export default App;
