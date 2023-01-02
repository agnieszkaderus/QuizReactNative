import React, { useEffect, useState } from 'react';
import {Button, Image, ImageBackground, Text, View} from 'react-native';
import ButtonRed from "../components/buttons/ButtonRed";
import ButtonBlue from "../components/buttons/ButtonBlue";
const wait = {uri:"https://thepowermoves.com/wp-content/uploads/letting-someone-wait.jpg"}
const details = {uri:"https://cdn-icons-png.flaticon.com/512/1091/1091169.png"}
const background = {uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/387eb18b-ab74-4503-a97f-b5e6143eb21d/d2cwpxy-ffb570c2-beb7-4c84-bc7c-e00f05d03b95.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM4N2ViMThiLWFiNzQtNDUwMy1hOTdmLWI1ZTYxNDNlYjIxZFwvZDJjd3B4eS1mZmI1NzBjMi1iZWI3LTRjODQtYmM3Yy1lMDBmMDVkMDNiOTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.efhwAkNI0kwwtLu6evVLqFk0uhqiyENDDjGdAt0LMeY"}

const TestDetails = ({route, navigation}) => {
    const id = route.params.itemId;

    const [isLoading, setLoading] = useState(false);
    const [test, setTest] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [tags, setTags] = useState([]);



    const getTest = () => {
        fetch('https://tgryl.pl/quiz/test/' + id)
            .then((response) => response.json())
            .then((json) => {
                setTest(json);
                setTasks(json.tasks);
                setTags(json.tags);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        console.log('Test details screen')
        setLoading(true);
        getTest();
        console.log("Pobrano test")
        console.log(test);
    }, []);


    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {isLoading ?
                <View>

                    <Image source={wait} style={{width: 350, height: 350}}/>
                    <Text style={{fontWeight: 'bold', fontSize: 30, alignSelf: 'center'}}>Loading...</Text>
                </View> :
                (
                    <ImageBackground source={background} style={{width: '100%', height: '110%'}}>
                        <View style={{padding: 5}}>
                            <Image source={details} style={{width: 200, height: 200, alignSelf:'center', marginTop: 60, margin:10}}/>
                            <Text style={{
                                alignItems: 'center',
                                fontSize: 30,
                                fontWeight: 'bold',
                                margin:10,
                                alignSelf: 'center'
                            }}> {test.name}</Text>
                            <Text style={{marginTop: 3, fontSize: 18}}>Description: {test.description}</Text>
                            <Text style={{marginTop: 3, fontSize: 18}}>Level: {test.level} </Text>
                            <Text style={{marginTop: 3, fontSize: 18}}>Id: {test.id} </Text>
                            <Text style={{marginTop: 3, marginBottom: 30, fontSize: 18}}>Tags: {tags[0]} {tags[1]} {tags[2]} </Text>

                            <ButtonBlue name={"SOLVE A TEST"} h={50} w={200}
                                       onPress={() => {
                                navigation.navigate('Quiz1', {itemId: id, data: test});
                            }}/>
                            <ButtonBlue name={"GO BACK"} h={50} w={200} onPress={() => navigation.goBack()}/>

                        </View>
                    </ImageBackground>
                )}
        </View>);
};

export default TestDetails;
