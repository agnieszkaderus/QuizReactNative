import React, { useEffect, useState } from 'react';
import {Button, Image, ImageBackground, Text, View} from 'react-native';
import {setAppInfo} from "react-native/Libraries/LogBox/Data/LogBoxData";
import ButtonRed from "../components/buttons/ButtonRed";
const wait = {uri:"https://thepowermoves.com/wp-content/uploads/letting-someone-wait.jpg"}
const details = {uri:"https://previews.123rf.com/images/carmenbobo/carmenbobo1406/carmenbobo140600527/29167578-stamp-with-word-details-inside.jpg"}

const TestScreen = ({route, navigation}) => {
    const id = route.params.itemId;

    const [isLoading, setLoading] = useState(false);
    const [test, setTest] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [tags, setTags] = useState([]);
    const [name, setName] = useState([]);
    const [description, setDescription] = useState([]);
    const [level, setLevel] = useState([]);


    const getTest = () => {
        fetch('https://tgryl.pl/quiz/test/' + id)
            .then((response) => response.json())
            .then((json) => {
                setTest(json);
                setTasks(json.tasks);
                setTags(json.tags);
                setName(json.name);
                setDescription(json.description);
                setLevel(json.level);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        console.log(id)
        setLoading(true);
        getTest();
    }, []);


    return (

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {isLoading ?
                <View>
                    <Image source={wait} style={{width: 350, height:350}}/>
                    <Text style={{fontWeight: 'bold', fontSize: 30, alignSelf:'center'}}>Loading...</Text>
                </View> :
                (
                    <View>
                        <Image source={details} style={{width: 390, height:200}}/>
                        <Text style={{alignItems: 'center', fontSize: 30, fontWeight:'bold', alignSelf:'center'}}> {test.name}</Text>
                        <Text style={{marginTop:3, fontSize: 18}}>Description: {test.description}</Text>
                        <Text style={{marginTop:3, fontSize: 18}}>Id: {test.id} </Text>
                        <Text style={{marginTop:3, fontSize: 18}}>Tags: {tags[0]}  {tags[1]}  {tags[2]} </Text>

                    </View>

                )}
        </View>);
};

export default TestScreen;
