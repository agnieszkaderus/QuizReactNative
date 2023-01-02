import React, {useState, useEffect, useContext} from "react";
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonGradient from "../components/buttons/ButtonGradient";
import ButtonBlue from "../components/buttons/ButtonBlue";

const LoginScreen = (navigation) => {
    const [nickname, setNickname] = useState();
    const [value, setValue] = useState();
    // Load data when the app starts
    useEffect(() => {
        const firstLoad = async () => {
            try {
                const savedNickname = await AsyncStorage.getItem("@nickname");
                setNickname(savedNickname);
                getData();

            } catch (err) {
                console.log(err);
            }
        };

        firstLoad();
    }, []);

    // Create or Update nickname
    const saveNickname = async () => {
        try {
            await AsyncStorage.setItem("@nickname", nickname);
        } catch (err) {
            console.log(err);
        }

        Keyboard.dismiss();
    };

    // Delete nickname
    const removeNickname = async () => {
        try {
            await AsyncStorage.removeItem("@nickname");
            setNickname();
        } catch (err) {
            console.log(err);
        }
        Keyboard.dismiss();
    };

    const checkRegulaminStatus = async () => {
        AsyncStorage.getItem("@storage_Key").then((value) => {
            console.log(value);
        })
    }

    const getData = () => {
        AsyncStorage.getItem("@storage_Key").then((value) => {
            if(value != null){
               setValue(value);
                }
            }
        )
    }

    return (
        <View style={styles.container}>
            {nickname ? (
                <Text style={styles.heading}>Hello {nickname}</Text>
            ) : (
                <Text style={styles.heading}> Name? </Text>
            )}

            <TextInput
                placeholder="Enter Your Nickname"
                style={styles.textInput}
                value={nickname}
                onChangeText={(value) => {
                    setNickname(value);
                }} />

            <View style={styles.buttonContainer}>
                <ButtonBlue w={150} h={50}name="Save" onPress={saveNickname} />
                <ButtonBlue w={150} h={50}name="Delete" onPress={removeNickname} />
            </View>
            <View style={{marginTop: 50}}>
                <Text style={styles.heading}> Regulamin Status: {value}</Text>

                <ButtonBlue w={300} h={50} name="CHECK STATUS"
                            onPress={checkRegulaminStatus}> </ButtonBlue>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    heading: {
        fontSize: 24,
    },
    textInput: {
        width: 300,
        marginVertical: 30,
        padding: 10,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 50,
    },
    buttonContainer: {
        width: 240,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
});

export default LoginScreen;
