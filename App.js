import * as React from 'react';
import { Text, View, Button, Image, ScrollView, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './navigation/MyDrawer';
import Regulamin from "./components/RegulaminModal";
import {useEffect} from "react";

const App = () => {


    return (
        <NavigationContainer>
            <Regulamin/>
            <MyDrawer/>
        </NavigationContainer>
    );
};

export default App;
