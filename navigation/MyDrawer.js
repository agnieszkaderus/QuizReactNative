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
    StatusBar
} from 'react-native'
import {createDrawerNavigator, DrawerContentScrollView} from '@react-navigation/drawer';
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabNavigator";
import ResultsLists from "../components/ResultsLists";
import TestsList from "../screens/TestsList";
import TestDetails from "../screens/TestDetails";
import quiz1 from "../screens/quizScreens/Quiz1";
import DatabaseHomeScreen from "../database/DatabaseHomeScreen";
import ViewUser from "../database/ViewUser";
import ViewAllUser from "../database/ViewAllUser";
import UpdateUser from "../database/UpdateUser";
import RegisterUser from "../database/RegisterUser";
import DeleteUser from "../database/DeleteUser";

const home = {uri: "https://cdn-icons-png.flaticon.com/512/3845/3845763.png"}
const results = {uri: "https://cdn-icons-png.flaticon.com/512/3845/3845849.png"}
const login = {uri: "https://cdn-icons-png.flaticon.com/512/3845/3845839.png"}
const test1 = {uri: "https://cdn-icons-png.flaticon.com/512/3845/3845880.png"}
const test2 = {uri: "https://cdn-icons-png.flaticon.com/512/3845/3845854.png"}
const test3 = {uri: "https://cdn-icons-png.flaticon.com/512/3845/3845793.png"}
const test4 = {uri: "https://cdn-icons-png.flaticon.com/512/3845/3845879.png"}
const list = {uri: "https://cdn-icons-png.flaticon.com/512/3845/3845772.png"}

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        // <Drawer.Navigator screenOptions={{
        //     drawerActiveBackgroundColor: '#1E90FF',
        //     drawerActiveTintColor: '#fff',
        //     drawerInactiveTintColor: '#333',
        //     drawerLabelStyle: {
        //         fontSize: 16,
        //     }
        // }}
        // >
            <Drawer.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{
                        drawerActiveBackgroundColor: '#1E90FF',
                        drawerActiveTintColor: '#fff',
                        drawerInactiveTintColor: '#333',
                        drawerLabelStyle: {
                            fontSize: 16,
                        }}}
                // drawerContent={(props) => {
                //     return (
                //         <DrawerContentScrollView {...props}>
                //             <Button title="Home"onPress={() => props.navigation.navigate("HomeScreen")} />
                //             <Button title="Custom" onPress={() => console.log('Custom Logic')} />
                //             <Button title="Logout" onPress={() => console.log('CUSTOM LOGOUT FUNCTION')} />
                //
                //         </DrawerContentScrollView>
                //     );
                // }}
                >
            <Drawer.Screen name="HomeScreen" component={TabNavigator}
                           options={{
                               title: 'Home Screen',
                               headerShown: false,
                               drawerIcon: () => ( <Image source={home} style={{width: 30, height: 30}}/>)}}/>
            <Drawer.Screen name="Login" component={LoginScreen}
                           options={{
                               title: 'Login',
                               headerShown: false,
                               drawerIcon: () => (<Image source={login} style={{width: 30, height: 30}}/>)
                           }}/>
            <Drawer.Screen name="ResultsScreen" component={ResultsLists}
                           options={{
                               title: 'Results',
                               headerShown: false,
                               drawerIcon: () => (<Image source={results} style={{width: 30, height: 30}}/>)}}/>

            <Drawer.Screen name="Tests" component={TestsList}
                           options={{
                               title: 'List of tests',
                               headerShown: false,
                               drawerIcon: () => (<Image source={list} style={{width: 30, height: 30}}/>)
                           }}/>

            <Drawer.Screen name="Test Details" component={TestDetails}
                           options={{
                               title: 'Test4',
                               headerShown: false,
                               drawerIcon: () => (<Image source={test1} style={{width: 30, height: 30}}/>)
                           }}/>

            <Drawer.Screen name="Test Details1" component={TestDetails}
                           options={{
                               title: 'Test3',
                               headerShown: false,
                               drawerIcon: () => (<Image source={test2} style={{width: 30, height: 30}}/>)
                           }}/>

            <Drawer.Screen name="Test Details2" component={TestDetails}
                           options={{
                               title: 'Test2',
                               headerShown: false,
                               drawerIcon: () => (<Image source={test3} style={{width: 30, height: 30}}/>)
                           }}/>

            <Drawer.Screen name="Quiz1" component={quiz1}
                           options={{
                               title: 'Test 1',
                               headerShown: false,
                               drawerIcon: () => (<Image source={test4} style={{width: 30, height: 30}}/>)
                           }}/>
                <Drawer.Screen name={"DatabaseHomeScreen"} component={DatabaseHomeScreen} />
                <Drawer.Screen name={"View"} component={ViewUser} />
                <Drawer.Screen name={"ViewAll"} component={ViewAllUser} />
                <Drawer.Screen name={"Update"} component={UpdateUser} />
                <Drawer.Screen name={"Register"} component={RegisterUser} />
                <Drawer.Screen name={"Delete"} component={DeleteUser} />

        </Drawer.Navigator>
    );
  }


export default MyDrawer;
