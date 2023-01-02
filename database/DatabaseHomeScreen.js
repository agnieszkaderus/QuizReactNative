
import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Mytextinput from "./Mytextinput";
import Mybutton from "./MyButton";
import { openDatabase } from 'react-native-sqlite-storage';
import Mytext from "./Mytext";
import ButtonRed from "../components/buttons/ButtonRed";

var db = openDatabase({ name: 'UserDatabase.db' });

const DatabaseHomeScreen = ({ navigation, route }) => {

    const JSON = route.params.JSON;

    useEffect(() => {
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length === 0) {
                        txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255) userid VARCHAR(30))',
                            []
                        );
                    }
                }
            );
        });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <Mytext text={JSON[0].name} />
                    <ButtonRed
                        h={40} w={350}
                        name="ADD TEST"
                        onPress={() => navigation.navigate('Register', {JSON: JSON})}
                    />
                    {/*<ButtonRed*/}
                    {/*    h={40} w={350}*/}
                    {/*    name="UPDATE TEST"*/}
                    {/*    onPress={() => navigation.navigate('Update', {JSON: JSON})}*/}
                    {/*/>*/}
                    {/*<ButtonRed*/}
                    {/*    h={40} w={350}*/}
                    {/*    name="VIEW"*/}
                    {/*    onPress={() => navigation.navigate('View', {JSON: JSON})}*/}
                    {/*/>*/}
                    <ButtonRed
                        h={40} w={350}
                        name="VIEW All"
                        onPress={() => navigation.navigate('ViewAll', {JSON: JSON})}
                    />
                    <ButtonRed
                        h={40} w={350}
                        name="DELETE TEST"
                        onPress={() => navigation.navigate('Delete', {JSON: JSON})}
                    />
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

export default DatabaseHomeScreen;
