import * as React from 'react';
import data from "../../data/Norwegian";
import QuizScreen from "../QuizScreen";

const NorwegianQuiz = ({navigation}) => {
    return (
        <QuizScreen data={data} onPress={() => navigation.navigate("HomeScreen")}/>
    )
}

export default NorwegianQuiz;
