import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList,  TextInput, Modal, TouchableHighlight } from 'react-native';
import ResultsData from "../data/ResultsData";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class ResultsList extends Component {

    constructor(props) {
        super(props);
        this.initData = this.data;
        this.state = {
            data: this.initData,
            isModalVisible: false,
            inputText: '',
            editedItem: 0,
        };
    }


    data = [
        {id: 1, text: 'Marek', color: 'red', score: 20},
        {id: 2, text: 'Ola', color: 'blue'},
        {id: 3, text: 'Item Three', color: 'yellow'},
        {id: 4, text: 'Item Four', color: 'green'},
        {id: 5, text: 'Item Five', color: 'orange'},
        {id: 6, text: 'Item Six', color: 'red'},
        {id: 7, text: 'Item Seven', color: 'blue'},
        {id: 8, text: 'Item Eight', color: 'yellow'},
        {id: 9, text: 'Item Nine', color: 'green'},
        {id: 10, text: 'Item Ten', color: 'orange'},
        {id: 11, text: 'Item Eleven', color: 'red'},
        {id: 12, text: 'Item Twelve', color: 'blue'},
        {id: 13, text: 'Item Thirteen', color: 'yellow'},
        {id: 14, text: 'Item Fourteen', color: 'green'},
        {id: 15, text: 'Item Fifteen', color: 'orange'},
    ]

    setModalVisible = (bool) => {
        this.setState({ isModalVisible: bool })
    }

    setInputText = (text) => {
        this.setState({ inputText: text })
        this.data.push('green', this.id.toString(), text);
    }

    setEditedItem = (id) => {
        this.setState({ editedItem: id })
    }

    handleEditItem = (editedItem) => {
        const newData = this.state.data.map( item => {
            if (item.id === editedItem ) {
                item.text = this.state.inputText
                return item
            }
            return item
        })
        this.setState({ data: newData })
    }

    renderItem = ({item}) => (
        <TouchableHighlight onPress={() => {this.setModalVisible(true); this.setInputText(item.text), this.setEditedItem(item.id)}}
                            underlayColor={'#f1f1f1'}>
            <View style={styles.item} >
                <View style={styles.marginLeft}>
                    <View style={[styles.menu, { backgroundColor: item.color }]}></View>
                    <View style={[styles.menu, { backgroundColor: item.color }]}></View>
                    <View style={[styles.menu, { backgroundColor: item.color }]}></View>
                </View>
                <Text style={styles.text}> {item.text} </Text>
            </View>
        </TouchableHighlight>
    )

    render() {
        return (
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> WYNIKI </Text>
                </View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this.renderItem}
                />
                <Modal animationType="fade" visible={this.state.isModalVisible}
                       onRequestClose={() => this.setModalVisible(false)}>
                    <View style={styles.modalView}>
                        <Text style={styles.text}>Change text:</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => {this.setState({inputText: text}); console.log('state ', this.state.inputText)}}
                            defaultValue={this.state.inputText}
                            editable = {true}
                            multiline = {false}
                            maxLength = {200}
                        />
                        <TouchableHighlight onPress={() => {this.handleEditItem(this.state.editedItem); this.setModalVisible(false)}}
                                            style={[styles.touchableHighlight, {backgroundColor: 'orange'}]} underlayColor={'#f1f1f1'}>
                            <Text style={styles.text}>Save</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
        )
    }
};

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
        height: 2,
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
})
