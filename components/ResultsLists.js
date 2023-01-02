import React, { useEffect, useState } from 'react';
const win = {uri: "https://www.nzherald.co.nz/resizer/MbplQ3KRr2rOB9lPKQUO-5YHWe0=/576x613/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/FFWCCU4UVAGY7V25CFNO36V52Q.jpg"}
const lose = {uri: "https://media.makeameme.org/created/thats-weak-bro.jpg"}
import {
    ActivityIndicator,
    View,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Text,
    TouchableHighlight,
    Modal, Image, RefreshControl,
} from 'react-native';
import Header from "./headers/header";

export default function ResultsLists () {
    const [JSON_DATA, setJSON_DATA] = useState('');
    const [showIndicator, setShowIndicator] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [onRefresh, setOnRefresh] = useState(false);

    async function fetchData() {
        fetch('https://tgryl.pl/quiz/results')
            .then((response) => response.json())
            .then((responseJson) => {
                setJSON_DATA(responseJson);
                setShowIndicator(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchData();
    })

    const Call_RefreshControl = () => {
        setJSON_DATA('');
        fetchData();
    }

    const ItemRender = ({ nick, score, total, type }) => {
        return (
            <TouchableHighlight onPress={() => setModalVisible(true)} underlayColor={'#f1f1f1'}>
                <View style={styleSheet.listItem}>
                    <Image source={win} />
                    <Text style={styleSheet.itemText}> name: {nick} </Text>
                    <Text style={styleSheet.itemText}> score: {score} </Text>
                    <Text style={styleSheet.itemTextBold}> total: {total}</Text>
                    <Text style={styleSheet.itemText}> type: {type}</Text>
                </View>
            </TouchableHighlight>

        )
    };
    // const ItemRender2 = ({ nick, score, total, type }) => (
    //     <TouchableHighlight onPress={()=> setModalVisible(true) } underlayColor={'#f1f1f1'}>
    //         <View style={styleSheet.listItem}>
    //             <Text style={styleSheet.itemText}> name: {nick} </Text>
    //             <Text style={styleSheet.itemText}> score: {score} </Text>
    //             <Text style={styleSheet.itemText}> total: {total}</Text>
    //             <Text style={styleSheet.itemText}> type: {type}</Text>
    //         </View>
    //     </TouchableHighlight>
    // );

    const divider = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: 'black',
                }}
            />
        );
    }

    return (
        <SafeAreaView style={styleSheet.MainContainer}>

            <ActivityIndicator
                size="large"
                color="pink"
                animating={showIndicator}
                title='Loading...'
                style={styleSheet.activityIndicator} />

            <FlatList
                data={JSON_DATA}
                renderItem={({ item }) => <ItemRender nick={item.nick} score={item.score} total={item.total} type={item.type}/>}
                ItemSeparatorComponent={divider}
                keyExtractor={item => item.id}
                ListHeaderComponent={<Header text="RESULTS"/>}
                refreshControl={
                    <RefreshControl
                        refreshing={onRefresh}
                        onRefresh={Call_RefreshControl}
                        tintColor="#C51162"
                        title='Loading...'
                        titleColor='blue'
                    />
                }
            />
            {/*<Modal animationType="fade" visible={modalVisible}*/}
            {/*       onRequestClose={()=> this.setModalVisible(false)}>*/}
            {/*    <View style={styles.modalView}>*/}
            {/*        <TouchableHighlight onPress={()=> {this.setModalVisible(false)}}*/}
            {/*                            style={[styles.touchableHighlight, {backgroundColor: 'orange'}]} underlayColor={'#f1f1f1'}>*/}
            {/*            <Text style={styles.text}> EXIT </Text>*/}
            {/*        </TouchableHighlight>*/}
            {/*    </View>*/}
            {/*</Modal>*/}

        </SafeAreaView>
    );
}

const styleSheet = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },

    listItem: {
        paddingLeft: 12,
        paddingTop: 10,
        paddingBottom: 10,
    },

    itemText: {
        fontSize: 24,
        color: 'black',
    },
    itemTextBold: {
        fontSize: 24,
        color: 'black',
        fontWeight: "bold",
        fontFamily: 'Sarpanch-Regular',
    },

    activityIndicator: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }});

    const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    contentContainer: {
        backgroundColor: 'white',
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'center',
    },
    marginLeft: {
        marginLeft: 5,
    },
    menu: {
        width: 20,
        height: 5,
        backgroundColor: '#111',
        margin: 2,
        borderRadius: 3,
    },
    text: {
        marginVertical: 30,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },

    textInput: {
        width: '90%',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        borderColor: 'gray',
        borderBottomWidth: 2,
        fontSize: 16,
    },
    modalView: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableHighlight: {
        backgroundColor: 'white',
        marginVertical: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
    }
});
