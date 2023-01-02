import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Button, Image, Text, Modal, StyleSheet} from 'react-native';
import ButtonGradient from "../buttons/ButtonGradient";
const regulaminImage = {uri: "https://szpital.szpitalzelazna.pl/wp-content/uploads/2018/05/regulamin.jpg" };


export default class Regulamin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            modalVisible: false,
        };
        this.getData();
        this.checkModal()
    }

    storeData =  () => {
        this.setState(prevState => ({ checked: !prevState.checked }))
        if(this.state.checked === true){
            AsyncStorage.setItem("@storage_Key", JSON.stringify(this.state.checked));
        }
    }

    getData = () => {
        AsyncStorage.getItem("@storage_Key").then((value) => {
            if(value != null){
                this.setState({
                    checked:true
                })
            }
        })
        console.log(this.state.checked);
    }

    checkModal(){
        if(this.state.checked === false){
            this.setState({ modalVisible: true})
        }
    }

    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }

    hideModal(visible) {
        if(this.state.checked === true){
            this.setState({modalVisible: false})
            console.log('Modal z regulaminem zamknięty');
        } else {
            alert("ACCEPTANCE OF THE TERMS AND CONDITIONS IS REQUIRED")
        }
    }


    render() {

        return (

            <Modal animationType={"slide"} transparent={true}
                   visible={this.checkModal}
             >


                <View style={{flex: 1, marginTop: 60, alignItems: 'center', backgroundColor:'white'}}>
                    <Image source={regulaminImage} style={{
                        width: 360,
                        height: 300,
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10
                    }}/>

                    <CheckBox
                        center
                        title='I accept the terms and conditions'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.checked}
                        onPress={() => this.storeData()}
                    />
                    <ButtonGradient w={300} h={50} c1={'black'} c2={'grey'} c3={'black'} name="CHECK STATUS"
                                    onPress={this.getData}> </ButtonGradient>
                    <ButtonGradient c1={'black'} c2={'grey'} c3={'black'} name='CLOSE' h={50} w={300}
                                    onPress={() => {
                                        this.hideModal()
                                    }}>
                    </ButtonGradient>

                </View>
            </Modal>


        );
    }
}


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

