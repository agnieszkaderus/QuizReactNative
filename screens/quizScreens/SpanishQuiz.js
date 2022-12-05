import * as React from 'react';
import data from "../../data/Spanish";
import QuizScreen from "../QuizScreen";

const SpanishQuiz = ({navigation}) => {
    return (
        <QuizScreen data={data} onPress={() => navigation.navigate("HomeScreen")}/>
    )
}

export default SpanishQuiz;
