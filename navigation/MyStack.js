import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PolishQuiz from "../screens/quizScreens/PolishQuiz";
import SplashScreen from "../components/SplashScreen";
import ResultsLists from "../components/ResultsLists";
import ThirdQuizScreen from "../screens/ThirdQuizScreen";
import {Button, Image} from "react-native";
import Regulamin from "../components/modals/RegulaminModal";
import Test from "../screens/Test";
import TestsList from "../screens/TestsList";
import TestDetails from "../screens/TestDetails";
import TestScreen from "../screens/TestScreen";
import quiz1 from "../screens/quizScreens/Quiz1";
import Quiz1 from "../screens/quizScreens/Quiz1";
import DatabaseHomeScreen from "../database/DatabaseHomeScreen";
import ViewUser from "../database/ViewUser";
import ViewAllUser from "../database/ViewAllUser";
import UpdateUser from "../database/UpdateUser";
import RegisterUser from "../database/RegisterUser";
import DeleteUser from "../database/DeleteUser";
const img = {uri: "https://www.freepnglogos.com/uploads/thinking-png/thinking-thinker-cuestion-answer-svg-png-icon-11.png"}

const Stack = createNativeStackNavigator();

function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={img} />
    );
}

const MyStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home"
                         screenOptions={{
                             title: 'QUIZ',
                             headerStyle: {
                                 backgroundColor: '#f4511e',
                             },
                             headerTitle: (props) => <LogoTitle {...props} />,
                             headerTintColor: '#fff',
                             headerTitleStyle: {
                                 fontWeight: 'bold',
                             },
                             headerShown:false
                         }}
        >
            <Stack.Screen name="" component={HomeScreen}
                          options={({navigation, route}) => ({
                              headerTitle: (props) => <LogoTitle {...props} />,
                              // Add a placeholder button without the `onPress` to avoid flicker
                              headerRight: () => (
                                  <Button title="Update count"/>
                              ),
                          })}
            />

            <Stack.Screen name="ResultsScreen" component={ResultsLists}/>
            <Stack.Screen name="Polish" component={PolishQuiz}/>
            <Stack.Screen name="Splash Screen" component={SplashScreen}/>
            <Stack.Screen name="ThirdQuizScreen" component={ThirdQuizScreen}/>
            <Stack.Screen name="Regulamin" component={Regulamin}/>
            <Stack.Screen name="Test" component={Test}/>
            <Stack.Screen name="Tests" component={TestsList}/>
            <Stack.Screen name="Test Details" component={TestDetails}/>
            <Stack.Screen name="Test Screen" component={TestScreen}/>
            <Stack.Screen name="Quiz1" component={Quiz1}/>
            <Stack.Screen
                name="DatabaseHomeScreen"
                component={DatabaseHomeScreen}
                options={{
                    title: 'Home', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="View"
                component={ViewUser}
                options={{
                    title: 'View User', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="ViewAll"
                component={ViewAllUser}
                options={{
                    title: 'View Users', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="Update"
                component={UpdateUser}
                options={{
                    title: 'Update User', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterUser}
                options={{
                    title: 'Register User', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="Delete"
                component={DeleteUser}
                options={{
                    title: 'Delete User', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>

    );
  };

  export default MyStack;
