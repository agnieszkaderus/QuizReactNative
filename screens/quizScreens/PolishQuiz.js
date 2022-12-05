import * as React from 'react';
import data from "../../data/Polish";
import QuizScreen from "../QuizScreen";

const PolishQuiz = ({navigation}) => {
    return (
        <QuizScreen data={data} onPress={() => navigation.navigate("HomeScreen")}/>
    )
};

export default PolishQuiz;
