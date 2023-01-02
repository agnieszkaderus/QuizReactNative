import React, {Component, useEffect} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Image}   from 'react-native'
import {LinearGradient} from "react-native-svg";
import ButtonGradient from "../buttons/ButtonGradient";
import ButtonGreen from "../buttons/ButtonGreen";
import ButtonBlue from "../buttons/ButtonBlue";
const image = {uri: "https://cdn-icons-png.flaticon.com/512/9222/9222747.png"};
const regulaminImage = {uri: "https://szpital.szpitalzelazna.pl/wp-content/uploads/2018/05/regulamin.jpg" };


class StartQuiz extends Component {
    state = {
        modalVisible: true,
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }

    hideModal(visible) {
        this.setState({modalVisible: false} )
        console.log("Zamknieto modal start quiz")
    }

    render() {
        return (
            <Modal animationType = {"slide"} transparent = {true}
                   visible = {this.state.modalVisible}
                   onRequestClose = {() => { console.log("Modal has been closed.") } }>

                <View style = {styles.modal}>
                    <Image source={image} style={{width: 300, height: 300, flexDirection: "column", alignItems: 'center', justifyContent: 'center', borderRadius: 10, margin:20}}/>
                    <ButtonBlue name='START QUIZ' h={60} w={300}
                                    onPress = {() => {
                                        this.hideModal()}}>
                    </ButtonBlue>
                </View>
            </Modal>


        )
    }
}
export default StartQuiz;

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        backgroundColor: '#ede3f2',
        padding: 100
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 100
    },
    text: {
        color: 'black',
        textSize: 20,
        marginTop: 10
    },
    textButton: {
        color: 'white',
        textSize: 20,
        marginTop: 10,
        textAlign: 'center',
    },
    buttonBottom: {
        paddingVertical: 20,
        marginVertical: 6,
        width: '80%',
        backgroundColor: '#000000',
        paddingHorizontal: 12,
        borderRadius: 12,
        marginTop: 70
    }
})
