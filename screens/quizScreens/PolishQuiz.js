import * as React from 'react';
import data from "../../data/Polish";
import QuizScreen from "../QuizScreen";
import TestsList from "../TestsList";

const PolishQuiz = ({navigation}) => {
    return (
        <TestsList data={data} onPress={() => navigation.navigate("HomeScreen")}/>
    )
};

export default PolishQuiz;
