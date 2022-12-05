import * as React from 'react';
import data from "../../data/English";
import QuizScreen from "../QuizScreen";

const EnglishQuiz = ({navigation}) => {
    return (
        <QuizScreen data={data} onPress={() => navigation.navigate("HomeScreen")}/>
    )
}

export default EnglishQuiz;
