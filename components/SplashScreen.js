import * as React from 'react';
import {useEffect} from "react";
import {Image, Text} from "react-native";
import {LinearGradient} from "react-native-svg";

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        const timer = setTimeout(()=>{
            navigation.navigate('Home');
        }, 5000);
    },[]);

    return (
        <LinearGradient colors={['#53CDE2','rgba(83, 205, 226, 0.43)','rgba(83, 205, 226, 0.25)']} style={styles.SplashWrapper}>
            <Image source={{uri: "https://t4.ftcdn.net/jpg/00/64/19/71/360_F_64197195_bGtFNqSvL6wuSN3ppKNLmk3gi8Ba9Gwa.jpg"}}/>
            <Text>Well Organized, Better Day</Text>
        </LinearGradient>
    )
}

export default SplashScreen;
