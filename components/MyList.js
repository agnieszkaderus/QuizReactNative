import React, {useEffect, useState} from 'react';
import {
    RefreshControl, StyleSheet, Text, SafeAreaView, Image, View, FlatList, Dimensions, ToastAndroid, ActivityIndicator
} from 'react-native';
const MyList = ()  =>{
    const [refreshing, setRefreshing] = useState(true);
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = () => {
        fetch('https://randomuser.me/api/?results=1')
            .then((response) => response.json())
            .then((responseJson) => {
                setRefreshing(false);
                var newdata = userData.concat(responseJson.results);
                setUserData(newdata);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const ItemView = ({ item }) => {
        return (
            <Text
                style={{
                    fontSize: 20,
                    padding: 10,
                }}>
                {item.id}: {item.name}
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    return(
        <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
            <View>
                {refreshing ? <ActivityIndicator /> : null}
                <FlatList
                    data={userData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    enableEmptySections={true}
                    renderItem={ItemView}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={loadUserData} />
                    }
                />
            </View>
        </SafeAreaView>
    )
}

export default MyList;
