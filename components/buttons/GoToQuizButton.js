import * as React from 'react';
import { Text, View, ImageBackground, Button, Image, ScrollView, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
const background ={uri:"https://static.storyweaver.org.in/illustrations/58827/large/14.jpg"}

const GoToQuizButton = ({ categoryName, onPress, image } ) => {
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.box]}>
                    <ImageBackground source={background} style={{width: '100%', height: '100%'}}
                                     imageStyle={{borderRadius: 25,}}>
                        <Image source={image} style={{width: 80, height: 80, alignSelf:'center', borderRadius: 5, justifyContent:'center', marginTop:10}} />
                        <Text style={styles.label}>  {categoryName} </Text>

                    </ImageBackground>
                </View>
            </TouchableOpacity>
        );
    }

    const styles = StyleSheet.create({
        elevation: {
            elevation: 20,
            shadowColor: 'red',
        },
        container: {
            flex: 1,
            marginTop: 8,
            backgroundColor: "aliceblue",
        },
        resultsButton: {
            paddingHorizontal: 5,
            paddingVertical: 40,
            height: 120,
            width: "auto",
            textAlign: "center",
            backgroundColor: "#fff",
            borderColor: '#B0E0E6', borderWidth: 4, borderRadius: 15,

        },
        box: {
            flex: 1,
            width: "auto",
            height: 155,
            paddingVertical: 8,
            paddingHorizontal: 5,

        },
        box2: {
            width: "auto",
            height: "auto",

        },
        row: {
            flexDirection: "row",
            flexWrap: "wrap",
        },
        button: {
            paddingHorizontal: 8,
            paddingVertical: 6,
            alignSelf: 'flex-start',
            marginTop: 30,
            marginHorizontal: "1%",
            marginBottom: 6,
            minWidth: "10%",
            height: 45,
            textAlign: 'center',
            borderRadius: 25,
            shadowColor: 'black',
            shadowOffset: 10,
            shadowRadius: 10,
            shadowOpacity: 50,

        },
        selected: {
            backgroundColor: "coral",
            borderWidth: 0,
        },
        buttonText: {
            fontSize: 15,
            fontWeight: "700",
            alignSelf: "center",
            color: "#000000",
            textShadowRadius: 10,
            textShadowColor: "white"
        },
        selectedLabel: {
            color: "white",
        },
        label: {
            textAlign: "center",
            marginTop: 10,
            marginBottom: 10,
            fontSize: 16,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textShadowRadius: 1,
            textShadowColor: "fff"
        },
    });

export default GoToQuizButton;

