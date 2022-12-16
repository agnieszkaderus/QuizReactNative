// // import React from 'react';
// // import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
// //
// // const wait = (timeout) => {
// //     return new Promise(resolve => setTimeout(resolve, timeout));
// // }
// //
// // const RefreshControl = () => {
// //     const [refreshing, setRefreshing] = React.useState(false);
// //
// //     const onRefresh = React.useCallback(() => {
// //         setRefreshing(true);
// //         wait(2000).then(() => setRefreshing(false));
// //     }, []);
// //
// //     return (
// //         <SafeAreaView style={styles.container}>
// //             <ScrollView
// //                 contentContainerStyle={styles.scrollView}
// //                 refreshControl={
// //                     <RefreshControl
// //                         refreshing={refreshing}
// //                         onRefresh={onRefresh}
// //                     />
// //                 }
// //             >
// //             </ScrollView>
// //         </SafeAreaView>
// //     );
// // }
// //
// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //     },
// //     scrollView: {
// //         flex: 1,
// //         backgroundColor: 'pink',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //     },
// // });
// //
// // export default RefreshControl;
//
// import React, {Component} from 'react';
// import {StyleSheet, Text,RefreshControl, View, FlatList, TextInput, Modal, TouchableHighlight, ScrollView} from 'react-native';
// import ResultsData from "../data/ResultsData";
// import AsyncStorage from "@react-native-async-storage/async-storage";
//
//
// const wait = (timeout) => {
//     return new Promise(resolve => setTimeout(resolve, timeout));
// }
//
// const RefreshControl = () => {
//
//
//         const [refreshing, setRefreshing] = React.useState(false);
//
//         const onRefresh = React.useCallback(() => {
//             setRefreshing(true);
//             this.wait(2000).then(() => setRefreshing(false));
//         }, []);
//
//
//
//
//     data = [
//         {id: 1, text: 'Marek', color: 'red', score: 20},
//         {id: 2, text: 'Ola', color: 'blue'},
//         {id: 3, text: 'Item Three', color: 'yellow'},
//         {id: 4, text: 'Item Four', color: 'green'},
//         {id: 5, text: 'Item Five', color: 'orange'},
//         {id: 6, text: 'Item Six', color: 'red'},
//         {id: 7, text: 'Item Seven', color: 'blue'},
//         {id: 8, text: 'Item Eight', color: 'yellow'},
//         {id: 9, text: 'Item Nine', color: 'green'},
//         {id: 10, text: 'Item Ten', color: 'orange'},
//         {id: 11, text: 'Item Eleven', color: 'red'},
//         {id: 12, text: 'Item Twelve', color: 'blue'},
//         {id: 13, text: 'Item Thirteen', color: 'yellow'},
//         {id: 14, text: 'Item Fourteen', color: 'green'},
//         {id: 15, text: 'Item Fifteen', color: 'orange'},
//     ]
//
//     const setModalVisible = (bool) => {
//         this.setState({ isModalVisible: bool })
//     }
//
//     const setInputText = (text) => {
//         this.setState({ inputText: text })
//         this.data.push('green', this.id.toString(), text);
//     }
//
//     const setEditedItem = (id) => {
//         this.setState({ editedItem: id })
//     }
//
//     const handleEditItem = (editedItem) => {
//         const newData = this.state.data.map( item => {
//             if (item.id === editedItem ) {
//                 item.text = this.state.inputText
//                 return item
//             }
//             return item
//         })
//         this.setState({ data: newData })
//     }
//
//     const renderItem = ({item}) => (
//         <TouchableHighlight onPress={() => {this.setModalVisible(true); this.setInputText(item.text), this.setEditedItem(item.id)}}
//                             underlayColor={'#f1f1f1'}>
//             <View style={styles.item} >
//                 <View style={styles.marginLeft}>
//                     <View style={[styles.menu, { backgroundColor: item.color }]}></View>
//                     <View style={[styles.menu, { backgroundColor: item.color }]}></View>
//                     <View style={[styles.menu, { backgroundColor: item.color }]}></View>
//                 </View>
//                 <Text style={styles.text}> {item.text} </Text>
//             </View>
//         </TouchableHighlight>
//     )
//
//         return (
//                 <ScrollView refreshControl={
//                     <RefreshControl
//                         refreshing={this.refreshing}
//                         onRefresh={this.RefreshControl}
//                     />
//                 }
//                 >
//                     <View style={styles.header}>
//                         <Text style={styles.headerText}> WYNIKI </Text>
//                     </View>
//                     <FlatList
//                         data={this.state.data}
//                         keyExtractor={(item) => item.id.toString()}
//                         renderItem={this.renderItem}
//                     />
//                     <Modal animationType="fade" visible={this.state.isModalVisible}
//                            onRequestClose={() => this.setModalVisible(false)}>
//                         <View style={styles.modalView}>
//                             <Text style={styles.text}>Change text:</Text>
//                             <TextInput
//                                 style={styles.textInput}
//                                 onChangeText={(text) => {this.setState({inputText: text}); console.log('state ', this.state.inputText)}}
//                                 defaultValue={this.state.inputText}
//                                 editable = {true}
//                                 multiline = {false}
//                                 maxLength = {200}
//                             />
//                             <TouchableHighlight onPress={() => {this.handleEditItem(this.state.editedItem); this.setModalVisible(false)}}
//                                                 style={[styles.touchableHighlight, {backgroundColor: 'orange'}]} underlayColor={'#f1f1f1'}>
//                                 <Text style={styles.text}>Save</Text>
//                             </TouchableHighlight>
//                         </View>
//                     </Modal>
//                 </ScrollView>
//         )
//
// };
//
// const styles = StyleSheet.create({
//     header: {
//         height: 60,
//         backgroundColor: 'orange',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     headerText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'white',
//     },
//     contentContainer: {
//         backgroundColor: 'white',
//     },
//     item: {
//         flexDirection: 'row',
//         borderBottomWidth: 1,
//         borderBottomColor: 'grey',
//         alignItems: 'center',
//     },
//     marginLeft: {
//         marginLeft: 5,
//     },
//     menu: {
//         width: 20,
//         height: 2,
//         backgroundColor: '#111',
//         margin: 2,
//         borderRadius: 3,
//     },
//     text: {
//         marginVertical: 30,
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginLeft: 10,
//     },
//
//     textInput: {
//         width: '90%',
//         marginLeft: 10,
//         marginRight: 10,
//         marginBottom: 30,
//         borderColor: 'gray',
//         borderBottomWidth: 2,
//         fontSize: 16,
//     },
//     modalView: {
//         flex: 1,
//         backgroundColor: 'white',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     touchableHighlight: {
//         backgroundColor: 'white',
//         marginVertical: 10,
//         alignSelf: 'stretch',
//         alignItems: 'center',
//     }
// })
//
// export default RefreshControl;
