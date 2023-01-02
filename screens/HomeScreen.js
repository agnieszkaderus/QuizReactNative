import * as React from 'react';
import {
    Text,
    View,
    Button,
    Image,
    ScrollView,
    StyleSheet,
    useColorScheme,
    TouchableOpacity,
    ImageBackground,

    Modal, TextInput
} from 'react-native'
import GoToQuizButton from '../components/buttons/GoToQuizButton';
import {useState, useEffect} from "react";
import ButtonBlue from "../components/buttons/ButtonBlue";
import {RefreshControl} from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonGradient from "../components/buttons/ButtonGradient";
// import NetInfo from "react-native/Libraries/Network/XMLHttpRequest";
import NetInfo from '@react-native-community/netinfo';

const img = {uri: "https://cdn-icons-png.flaticon.com/512/8327/8327710.png"}

const background = {uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/387eb18b-ab74-4503-a97f-b5e6143eb21d/d2cwpxy-ffb570c2-beb7-4c84-bc7c-e00f05d03b95.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM4N2ViMThiLWFiNzQtNDUwMy1hOTdmLWI1ZTYxNDNlYjIxZFwvZDJjd3B4eS1mZmI1NzBjMi1iZWI3LTRjODQtYmM3Yy1lMDBmMDVkMDNiOTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.efhwAkNI0kwwtLu6evVLqFk0uhqiyENDDjGdAt0LMeY"}
const icon1 = {uri: "https://cdn-icons-png.flaticon.com/512/9274/9274258.png"}
const icon2 = {uri: "https://cdn-icons-png.flaticon.com/512/9274/9274324.png"}
const icon3 = {uri: "https://cdn-icons-png.flaticon.com/512/9274/9274265.png"}
const icon4 = {uri: "https://cdn-icons-png.flaticon.com/512/9274/9274261.png"}
const icon5 = {uri: "https://cdn-icons-png.flaticon.com/512/9274/9274288.png"}
const icon6 = {uri: "https://cdn-icons-png.flaticon.com/512/9274/9274309.png"}
const icon7 = {uri: "https://cdn-icons-png.flaticon.com/512/9274/9274318.png"}
const icon8 = {uri: "https://cdn-icons-png.flaticon.com/512/9274/9274268.png"}
const icon9 = {uri: "https://cdn-icons-png.flaticon.com/512/9274/9274267.png"}
const bg = {uri: "https://static.storyweaver.org.in/illustrations/58816/search/3.jpg"}
const wait = {uri:"https://cdn-icons-png.flaticon.com/512/5698/5698576.png"}
const wheelOfFortune = {uri: "https://cdn-icons-png.flaticon.com/512/3508/3508906.png"}

const HomeScreen = ({navigation, route}) => {
    const [onRefresh, setOnRefresh] = useState(false);

    const [JSON_DATA, setJSON_DATA] = useState('Nie pobrano');
    const [name, setName] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [randomID, setRandomID] = useState(null);
    const [randomTestName, setRandomTestName] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [random1, setRandom1] = useState(0);
    const [random2, setRandom2] = useState(1);
    const [random3, setRandom3] = useState(2);
    const [random4, setRandom4] = useState(3);
    const [random1ID, setRandom1ID] = useState("62032610069ef9b2616c761e");
    const [random2ID, setRandom2ID] = useState("62032610069ef9b2616c761c");
    const [random3ID, setRandom3ID] = useState("62032610069ef9b2616c761d");
    const [random4ID, setRandom4ID] = useState("62032610069ef9b2616c761b");
    const [netInfo, setNetInfo] = useState('');

    useEffect(() => {
        // Subscribe to network state updates
        const unsubscribe = NetInfo.addEventListener((state) => {
            setNetInfo(
                `Connection type: ${state.type}
        Is connected?: ${state.isConnected}
        IP Address: ${state.details.ipAddress}`
            );
        });
        return () => {
            // Unsubscribe to network state updates
            unsubscribe();
        };
    }, []);

    const getNetInfo = () => {
        // To get the network state once
        NetInfo.fetch().then((state) => {
            alert(
                `Connection type: ${state.type}
        Is connected?: ${state.isConnected}
        IP Address: ${state.details.ipAddress}`
            );
        });
    };

    function LogoTitle() {
        return (
            <Image
                style={{ width: 50, height: 50 }}
                source={img} />
        );
    }

    useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTintColor: '#fff',

            headerLeft: () => (
                <Button style={{marginLeft: 5}} onPress={() => getNetInfo()} title="NETINFO"/>

            ),
            headerRight: () => (
                <Button style={{marginRight: 5}} onPress={() => Call_RefreshControl()} title="REFRESH"/>
            ),
        });
    }, [navigation]);



    const getTests = () => {
        fetch('https://tgryl.pl/quiz/tests')
            .then((response) => response.json())
            .then((responseJson) => {
                setJSON_DATA(responseJson);
                setName(responseJson.name);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
            console.log("Set loading na false")
    }

    useEffect(() => {
        setLoading(true);
        getTests();
        console.log("Pobrano testy z bazy");
        console.log(JSON_DATA)
        setRandomNumbers();
    }, []);

    const setRandomNumbers = () =>{
        const a = Math.floor(Math.random() * 4)
        setRandom1(a);
        if (a === 0) {
            setRandom1ID("62032610069ef9b2616c761e");
        } else if (a === 1) {
            setRandom1ID("62032610069ef9b2616c761c")
        } else if (a === 2) {
            setRandom1ID("62032610069ef9b2616c761d")
        } else if (a===3) {
            setRandom1ID("62032610069ef9b2616c761b")
        }

        const b = Math.floor(Math.random() * 4)
        setRandom2(b);
        if (b === 0) {
            setRandom2ID("62032610069ef9b2616c761e");
        } else if (b === 1) {
            setRandom2ID("62032610069ef9b2616c761c")
        } else if (b === 2) {
            setRandom2ID("62032610069ef9b2616c761d")
        } else if (b===3) {
            setRandom2ID("62032610069ef9b2616c761b")
        }

        const c = Math.floor(Math.random() * 4)
        setRandom3(c);
        if (c === 0) {
            setRandom3ID("62032610069ef9b2616c761e");
        } else if (c === 1) {
            setRandom3ID("62032610069ef9b2616c761c")
        } else if (c === 2) {
            setRandom3ID("62032610069ef9b2616c761d")
        } else if (c===3) {
            setRandom3ID("62032610069ef9b2616c761b")
        }

        const d = Math.floor(Math.random() * 4)
        setRandom4(d);
        if (d === 0) {
            setRandom4ID("62032610069ef9b2616c761e");
        } else if (d === 1) {
            setRandom4ID("62032610069ef9b2616c761c")
        } else if (d === 2) {
            setRandom4ID("62032610069ef9b2616c761d")
        } else if (d===3) {
            setRandom4ID("62032610069ef9b2616c761b")
        }
    }

    const randomTest = () => {
        const x = Math.floor(Math.random() * 4);
        if (x === 0) {
            setRandomID("62032610069ef9b2616c761e");
            setRandomTestName(JSON_DATA[0].name);
            setShowModal(true);
        } else if (x === 1) {
            setRandomID("62032610069ef9b2616c761c")
            setRandomTestName(JSON_DATA[1].name);
            setShowModal(true);
        } else if (x === 2) {
            setRandomID("62032610069ef9b2616c761d")
            setRandomTestName(JSON_DATA[2].name);
            setShowModal(true);
        } else if (x===3) {
            setRandomID("62032610069ef9b2616c761b")
            setRandomTestName(JSON_DATA[3].name);
            setShowModal(true);
        }
        console.log("wybrano losowy test nr: "+x)
        if (x === 0) {
            setRandomID("62032610069ef9b2616c761e");
            setRandomTestName(JSON_DATA[0].name);
           setShowModal(true);
        } else if (x === 1) {
            setRandomID("62032610069ef9b2616c761c")
            setRandomTestName(JSON_DATA[1].name);
           setShowModal(true);
        } else if (x === 2) {
            setRandomID("62032610069ef9b2616c761d")
            setRandomTestName(JSON_DATA[2].name);
           setShowModal(true);
        } else if (x===3) {
            setRandomID("62032610069ef9b2616c761b")
            setRandomTestName(JSON_DATA[3].name);
            setShowModal(true);
        }

    }

    const randomTestModal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <ImageBackground source={bg} style={{
                        width: '100%',
                        height: '100%',
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{backgroundColor: 'rgba(255,255,255,0.53)', borderRadius: 25}}>
                            <Image source={icon9}
                                   style={{width: 200, height: 200, alignSelf: 'center', marginBottom: 30}}/>
                            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}> Random
                                test: {randomTestName} </Text>
                            <ButtonBlue w={150} h={50}
                                        onPress={() => {
                                            navigation.navigate('Test Details', {itemId: randomID, data: JSON_DATA})
                                        }}
                                        name={"SEE DETAILS"}>
                            </ButtonBlue>

                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>

                                <ButtonBlue w={150} h={50}
                                            onPress={() => {
                                                setShowModal(false);
                                                setRandomID('');
                                                setRandomTestName('');
                                            }}

                                            name={"GO BACK"}>
                                </ButtonBlue>

                            </View>
                            <View>


                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </Modal>
        )
    };

    const Call_RefreshControl = () => {
        console.log(JSON_DATA)
        setJSON_DATA('Na nic');
        console.log('set na 0')
        console.log(JSON_DATA)
        getTests();
        console.log(' po refresh')
        console.log(JSON_DATA)
        setRandomNumbers()
    }

    const checkRegulaminStatus = async () => {
       AsyncStorage.getItem("@storage_Key").then((value) => {
           console.log(value);
       })
    }




    return (
        <View>
            {isLoading ?
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 25, alignSelf: 'center', paddingTop:5}}>Loading...</Text>
                </View> :
                (
                    <View>
                        <RefreshControl refreshing={onRefresh}
                                        onRefresh={()=> {
                                            Call_RefreshControl()
                                        }}
                                        tintColor="#C51162"
                                        title='Loading...'
                                        titleColor='blue'/>

                    <ImageBackground source={background} style={{width: '100%', height: '100%'}}>

                        <ScrollView style={{padding: 0}}>
                            {/*<ButtonGradient w={300} h={50} c1={'black'} c2={'grey'} c3={'black'} name="CHECK STATUS"*/}
                            {/*                onPress={checkRegulaminStatus}> </ButtonGradient>*/}
                                <ButtonBlue name={"GO TO DATABASE"} onPress={()=> {
                                    navigation.navigate("DatabaseHomeScreen", {JSON: JSON_DATA});}}
                                            h={30} w={400}/>



                            <View style={{flexDirection: 'column', marginTop:3}}>
                                    <Image source={wheelOfFortune}
                                           style={{width: 100, height: 100, alignSelf: 'center'}}/>
                                        <ButtonBlue name={"RANDOM TEST"} h={35} w={150} onPress={randomTest}/>
                                        {randomTestModal()}
                            </View>
                            {/*<Text style={{alignSelf: 'center', fontWeight: 'bold', color:'white'}}> </Text>*/}
                            <View style={{marginTop:3, flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 2, flexDirection: 'column'}}>
                                    {/*<Text style={{alignSelf: 'center', fontWeight: 'bold'}}> </Text>*/}
                                        <GoToQuizButton categoryName={JSON_DATA[random1].name} onPress={() => { navigation.navigate('Test Details', {itemId: random1ID,});}} image={icon1}/>
                                        <GoToQuizButton categoryName={JSON_DATA[random2].name} onPress={() => { navigation.navigate('Test Details', {itemId: random2ID,});}} image={icon2}/>
                                        <GoToQuizButton categoryName={JSON_DATA[random1].name}  onPress={() => { navigation.navigate('Test Details', {itemId: random1ID,});}} image={icon3}/>
                                        <GoToQuizButton categoryName={JSON_DATA[random2].name}  onPress={() => { navigation.navigate('Test Details', {itemId: random2ID,});}} image={icon4}/>
                                </View>

                                <View style={{flex: 2, flexDirection: 'column'}}>
                                    <Text style={{alignSelf: 'center', fontWeight: 'bold'}}> </Text>
                                    <GoToQuizButton categoryName={JSON_DATA[random3].name}  onPress={() => { navigation.navigate('Test Details', {itemId: random3ID,});}} image={icon5}/>
                                    <GoToQuizButton categoryName={JSON_DATA[random4].name}  onPress={() => { navigation.navigate('Test Details', {itemId: random4ID,});}} image={icon6}/>
                                    <GoToQuizButton categoryName={JSON_DATA[random3].name}  onPress={() => { navigation.navigate('Test Details', {itemId: random3ID,});}} image={icon7}/>
                                    <GoToQuizButton categoryName={JSON_DATA[random4].name}  onPress={() => { navigation.navigate('Test Details', {itemId: random4ID,});}} image={icon8}/>


                                </View>
                            </View>
                        </ScrollView>
                    </ImageBackground>
                    </View>
                )}
        </View>
    );
};



{/* WYSZUKIWANIE CZEGOS
                <View style={{flexDirection: 'row', borderColor: 'C6C6C6', borderWidth: 1, borderRadius: 10}}>
                    <Feather name="search" size={24} color="C6C6C6" style={{marginLeft: 10, paddingTop: 12}}/>
                    <TextInput placeholder='search'/>
                </View>*/}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  resultsButton: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    height:  120,
    width: "auto",
    textAlign: "center",
    borderRadius: 15,
  },
  box: {
    flex: 1,
    width: "auto",
    height: 150,
    paddingVertical:5,
    paddingHorizontal: 4,

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
    alignSelf: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    width: "48%",
    height: 50,
    textAlign: "center",
    borderColor: '#B0E0E6', borderWidth: 2, borderRadius: 8,
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonText: {
    fontSize: 17,
    paddingTop: 40,
    paddingLeft: 80,
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: "500",
    color: "#000000",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});


  export default HomeScreen;
