// import {View, Text, Button1,StyleSheet, Image, TouchableOpacity} from "react-native";
// import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import * as React from 'react';
//
// import Feather from "react-native-vector-icons/Feather";
// import LoginScreen from "../screens/LoginScreen";
// import HomeScreen from "../screens/HomeScreen";
// import PolishQuiz from "../screens/quizScreens/PolishQuiz";
// import ResultsScreen from "../screens/ResultsScreen";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ItalianQuiz from "../screens/quizScreens/ItalianQuiz";
// import EnglishQuiz from "../screens/quizScreens/EnglishQuiz";
// import SpanishQuiz from "../screens/quizScreens/SpanishQuiz";
// import NorwegianQuiz from "../screens/quizScreens/NorwegianQuiz";
// import {Header} from "react-native/Libraries/NewAppScreen";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//
// const Stack = createNativeStackNavigator();
//
// const HomeStack = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={HomeScreen} options={{
//                 headerTitle: () => <Header name="Home"/>,
//                 headerRight: () => (
//                     <View>
//                         <TouchableOpacity style={{marginLeft: 15}}>
//                             <MaterialCommunityIcons name='dots-vertical' size={28} color="#000" />
//                         </TouchableOpacity>
//                     </View>
//                 ),
//                 headerStyle: {
//                     height: 60,
//                     borderBottomLeftRadius: 50,
//                     borderBottomRightRadius: 50,
//                     backgroundColor: '#00e4d0',
//                     shadowColor: '#000',
//                     elevation: 25
//                 }}} />
//             <Stack.Screen name="ResultsScreen" component={ResultsScreen} options={{ title: 'Results' }}/>
//             <Stack.Screen name="Italian" component={ItalianQuiz} options={{ title: 'Quiz Page' }} />
//             <Stack.Screen name="Polish" component={PolishQuiz} options={{ title: 'Quiz Page' }} />
//             <Stack.Screen name="English" component={EnglishQuiz} options={{ title: 'Quiz Page' }} />
//             <Stack.Screen name="Spanish" component={SpanishQuiz} options={{ title: 'Quiz Page' }} />
//             <Stack.Screen name="Norwegian" component={NorwegianQuiz} options={{ title: 'Quiz Page' }} />
//         </Stack.Navigator>
//
//     );
// }
//
// export default HomeStack;
