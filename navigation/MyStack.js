import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResultsScreen from '../screens/ResultsScreen';
import HomeScreen from '../screens/HomeScreen';
import SpanishQuiz from "../screens/quizScreens/SpanishQuiz";
import PolishQuiz from "../screens/quizScreens/PolishQuiz";
import ItalianQuiz from "../screens/quizScreens/ItalianQuiz";
import EnglishQuiz from "../screens/quizScreens/EnglishQuiz";
import NorwegianQuiz from "../screens/quizScreens/NorwegianQuiz";
import SplashScreen from "../components/SplashScreen";
import RefreshControl from "../components/RefreshControl";
import MyList from "../components/MyList";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} {/*} options={{
            headerTitle: () => <Header name="Home"/>,
            headerRight: () => (
                <View>
                    <TouchableOpacity style={{marginLeft: 15}}>
                        <MaterialCommunityIcons name='dots-vertical' size={28} color="#000" />
                    </TouchableOpacity>
                </View>
            ),
            headerStyle: {
                height: 60,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                backgroundColor: '#00e4d0',
                shadowColor: '#000',
                elevation: 25
            }

        }*/}  />
        <Stack.Screen name="ResultsScreen" component={MyList} options={{ title: 'Results' }}/>
        <Stack.Screen name="Italian" component={ItalianQuiz} options={{ title: 'Quiz Page' }} />
        <Stack.Screen name="Polish" component={PolishQuiz} options={{ title: 'Quiz Page' }} />
        <Stack.Screen name="English" component={EnglishQuiz} options={{ title: 'Quiz Page' }} />
        <Stack.Screen name="Spanish" component={SpanishQuiz} options={{ title: 'Quiz Page' }} />
        <Stack.Screen name="Norwegian" component={NorwegianQuiz} options={{ title: 'Quiz Page' }} />
        <Stack.Screen name="Splash Screen" component={SplashScreen} options={{ title: 'Quiz Page' }} />
        <Stack.Screen name="Regulamin" component={Regulamin} options={{ title: 'Quiz Page' }} />
      </Stack.Navigator>

    );
  };

  export default MyStack;
