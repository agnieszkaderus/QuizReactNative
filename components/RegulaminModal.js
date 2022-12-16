import React, {Component, useEffect} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Image}   from 'react-native'
const image = {uri: "https://t3.ftcdn.net/jpg/02/64/42/56/240_F_264425633_KujfwIjGkKjZF4niKgDbz3QKBmNupLCz.jpg"};
const regulaminImage = {uri: "https://szpital.szpitalzelazna.pl/wp-content/uploads/2018/05/regulamin.jpg" };


class Regulamin extends Component {
    state = {
        modalVisible: true,
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }

    hideModal(visible) {
        this.setState({modalVisible: false} )
    }

    render() {
        return (
                <Modal animationType = {"slide"} transparent = {true}
                       visible = {this.state.modalVisible}
                       onRequestClose = {() => { console.log("Modal has been closed.") } }>

                    <View style = {styles.modal}>
                        <Image source={regulaminImage} style={{width: 420, height: 300, flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}/>
                        <TouchableHighlight style={styles.buttonBottom}
                            onPress = {() => {
                            this.hideModal()}}>
                            <Text style = {styles.textButton}> CLOSE </Text>
                        </TouchableHighlight>

                    </View>
                </Modal>


        )
    }
}
export default Regulamin

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
