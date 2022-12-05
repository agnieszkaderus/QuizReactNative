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
    Modal
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import GoToQuizButton from '../components/GoToQuizButton';
import Feather from 'react-native-vector-icons/Feather'
import {useState} from "react";

const image3 = {uri: "https://st3.depositphotos.com/3930503/12555/i/950/depositphotos_125556546-stock-photo-white-gray-background-grey-gradient.jpg" };
const image = {uri: "https://img.freepik.com/free-vector/blank-blue-halftone-background_53876-99003.jpg?w=2000" };
const image2 = {uri: "https://t4.ftcdn.net/jpg/04/51/72/11/240_F_451721139_eGz4P3gDwqGaHKsTxuWq8DZczOxqQ34f.jpg"}
const back = {uri: "https://thumbs.dreamstime.com/b/t%C5%82a-b%C5%82%C4%99kit-chmurnieje-nieba-s%C5%82o%C5%84ce-9186872.jpg"}
const finlandFlag = {uri: "https://m.media-amazon.com/images/I/31EQqUd4QEL.jpg"}
const greeceFlag = {uri: "https://cdn.galleries.smcloud.net/t/galleries/gf-mhw6-Ldic-dLpW_flaga-grecji-grecja-1920x1080-nocrop.jpg"}


const HomeScreen = ({ navigation }) => {
    return (
    <ImageBackground source={back} style={{width: '100%', height: '100%'}}>

        <ScrollView style={{padding: 3}}>
                {/* WYSZUKIWANIE CZEGOS
                <View style={{flexDirection: 'row', borderColor: 'C6C6C6', borderWidth: 1, borderRadius: 10}}>
                    <Feather name="search" size={24} color="C6C6C6" style={{marginLeft: 10, paddingTop: 12}}/>
                    <TextInput placeholder='search'/>
                </View>*/}

                <GoToQuizButton number="1" onPress={() => navigation.navigate('Italian')}
                                image={{uri: "https://liceum3.pl/wp-content/uploads/2019/05/flaga-w%C5%82och-1160x665.jpg"}}/>
                <GoToQuizButton number="2" onPress={() => navigation.navigate('English')}
                                image={{uri: "https://img.myloview.pl/fototapety/flaga-angielska-flaga-anglii-flaga-anglii-flaga-anglii-ilustracji-oficjalne-kolory-i-proporcje-poprawnie-tlo-angielski-angielski-baner-symbol-ikona-700-100841650.jpg"}}/>
                <GoToQuizButton number="3" onPress={() => navigation.navigate('Polish')}
                                image={{uri: "https://grapil.pl/userdata/public/gfx/13838/Narodowa-flaga-Polski.jpg"}}/>
                <GoToQuizButton number="4" onPress={() => navigation.navigate('Norwegian')}
                                image={finlandFlag}/>
                <GoToQuizButton number="5" onPress={() => navigation.navigate('Norwegian')}
                                image={greeceFlag}/>
                <GoToQuizButton number="6" onPress={() => navigation.navigate('Norwegian')}
                                image={{uri: "https://media.istockphoto.com/id/1095932558/pl/zdj%C4%99cie/flaga-norwegii-machaj%C4%85c-flag%C4%85-norwegii-3d-ilustracji-oslo.jpg?s=612x612&w=0&k=20&c=rKRZ853ih04kcUav3-lLP7hO5t9dKiwkYYKtWV6DG5E="}}/>
                <GoToQuizButton number="7" onPress={() => navigation.navigate('Spanish')}
                                image={{uri: "https://img.freepik.com/premium-wektory/flaga-hiszpanii-tozsamosc-narodowa-kraju-hiszpania_8071-1617.jpg?w=2000"}}/>
               <View style={styles.box2}>
                    <TouchableOpacity style={[styles.resultsButton]}
                                      onPress={() => navigation.navigate('ResultsScreen')}>
                        <ImageBackground source={image3} style={{width: '100%', height: '100%', flexDirection: 'row'}}
                                         imageStyle={{borderRadius: 25}}>
                            <View>
                                <Text style={styles.buttonText}> Przejdź do ekranu wyników </Text>
                            </View>
                            <View>
                                <Feather name="file-text" size={40} color="C6C6C6"
                                         style={{marginLeft: 10, paddingTop: 30}}/>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
  };

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
    minWidth: "48%",
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
