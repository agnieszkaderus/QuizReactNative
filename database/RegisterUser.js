
import React, {useEffect, useState} from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Alert,
    SafeAreaView,
    Text, Button,
} from 'react-native';
import Mytextinput from "./Mytextinput";
import Mybutton from "./MyButton";
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });


const RegisterUser = ({ navigation, route }) => {
    const JSON_DATA = route.params.JSON;


    let [userName, setUserName] = useState('');
    let [userContact, setUserContact] = useState('');
    let [userAddress, setUserAddress] = useState('');

    let register_user = () => {
        setUserName(JSON_DATA[2].name);
        setUserContact(JSON_DATA[2].description);
        setUserAddress(JSON_DATA[2].level);


            db.transaction(function (tx) {
                tx.executeSql(
                    'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
                    [userName, userContact, userAddress],
                    (tx, results) => {
                        console.log('Results', results.rowsAffected);
                        if (results.rowsAffected > 0) {
                            Alert.alert(
                                'Success',
                                'You are Registered Successfully',
                                [
                                    {
                                        text: 'Ok',
                                        onPress: () => navigation.navigate('HomeScreen'),
                                    },
                                ],
                                { cancelable: false }
                            );
                        } else alert('Registration Failed');
                    }
                );
            });
        };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <KeyboardAvoidingView
                            behavior="padding"
                            style={{ flex: 1, justifyContent: 'space-between' }}>

                            <Mybutton title="Submit" customClick={register_user} />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                </Text>
            </View>
        </SafeAreaView>
    );

};

export default RegisterUser;
