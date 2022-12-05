import * as React from 'react';
import data from "../../data/Italian";
import QuizScreen from "../QuizScreen";

const ItalianQuiz = ({navigation}) => {
    return (
        <QuizScreen data={data} onPress={() => navigation.navigate("HomeScreen")}/>
    )
}

export default ItalianQuiz;
