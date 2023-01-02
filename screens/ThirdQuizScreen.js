import * as React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    Animated,
    Modal,
    SafeAreaView, ActivityIndicator, TextInput, TouchableHighlight, FlatList, RefreshControl, Button, ScrollView
} from 'react-native'
import {useEffect, useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../components/headers/header";

const image = {uri: "https://t3.ftcdn.net/jpg/02/64/42/56/240_F_264425633_KujfwIjGkKjZF4niKgDbz3QKBmNupLCz.jpg"};
const back = {uri: "https://thumbs.dreamstime.com/b/smoke-floor-isolated-black-background-misty-fog-effect-texture-overlays-text-space-smoke-fog-misty-overltays-effect-134306702.jpg"}
const gradient = {uri: "https://www.creativefabrica.com/wp-content/uploads/2020/04/18/Light-Blue-Gradient-Background-Graphics-3899476-1-580x387.jpg"}
const nextButton = {uri: "https://www.creativefabrica.com/wp-content/uploads/2020/03/08/Light-Blue-Simple-Gradient-Background-Graphics-3307511-1-580x387.jpg"}
const next = {uri: "https://img.redro.pl/fototapety/blue-light-gradient-background-smooth-blue-blurred-abstract-700-198099226.jpg"}
import {Dimensions} from 'react-native';



const ThirdQuizScreen = ({navigation}) => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;


  const [JSON_DATA, setJSON_DATA] = useState('');
  const [JSON_QUESTION, setJSON_QUESTION] = useState('');
  const [showIndicator, setShowIndicator] = useState(true);
    // const url = `https://tgryl.pl/quiz/tests/${quizID}`;
    //const url = `https://tgryl.pl/quiz/tests/62032610069ef9b2616c761e`;

    const cons = (x) => {
        console.log("**: " + x)
    }
    async function fetchData() {
        fetch('https://tgryl.pl/quiz/tests/62032610069ef9b2616c761e')
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
      });

   const renderItem = ({item, index}) => {
        return (
            <View>
                <View>
                    <Text>{item.RxDrugName}</Text>
                    <Text>{item.RxNumber}</Text>
                </View>

                <View>
                    <View style={{ paddingVertical: 10 }}>
                        <Text>{item.StoreNumber }</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image />
                    </View>

                </View>
            </View>
        );
    }

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
<ScrollView>
    <View style={{flex: 1, flexDirection: 'row', width: width}}>

        <View style={[styles.viewStyle, {flex: 5, flexDirection: 'column'}]}>
            <Text> Zielone 1</Text>
                <View style={styles.childStyle}>
                    <Text> czerwone1 </Text>
                </View >

                <View style={styles.childStyle}>
                    <Text> czerwone2 </Text>
                </View>

        </View>

        <View style={{flex: 1}}>
                <Text> 3 </Text>
        </View>

        <View style={[styles.viewStyle, {flex: 5, flexDirection: 'column'}]}>
            <Text> zielone 2 </Text>
                <View style={styles.childStyle}>
                    <Text> czerwone 4 </Text>
                </View>
                <View style={styles.childStyle}>
                    <Text> czerwone 5  </Text>
              </View>
        </View>
    </View>
    </ScrollView>
    );
}

export default ThirdQuizScreen;
        const space = 5;
        const styles = {
        viewStyle: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: space,
        marginTop: 20,
        backgroundColor: 'green'
    },
        childStyle: {
        width: '50%',
        height: 100,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: space
    }
    }
