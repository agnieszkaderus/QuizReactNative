import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Animated,
    Button,
    Image,
    ImageBackground, Modal,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    View
} from 'react-native';
const image = {uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/387eb18b-ab74-4503-a97f-b5e6143eb21d/d2cwpxy-ffb570c2-beb7-4c84-bc7c-e00f05d03b95.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM4N2ViMThiLWFiNzQtNDUwMy1hOTdmLWI1ZTYxNDNlYjIxZFwvZDJjd3B4eS1mZmI1NzBjMi1iZWI3LTRjODQtYmM3Yy1lMDBmMDVkMDNiOTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.efhwAkNI0kwwtLu6evVLqFk0uhqiyENDDjGdAt0LMeY"}
const scoreImg = {uri :"https://cdn-icons-png.flaticon.com/512/5721/5721468.png"}
import divider from "../../components/dividers/divider";
import ButtonOptionWhite from "../../components/buttons/ButtonOptionWhite";
import StartQuiz from "../../components/modals/StartQuizModal";
import ButtonBlue from "../../components/buttons/ButtonBlue";
import axios from "axios";
const wait = {uri:"https://thepowermoves.com/wp-content/uploads/letting-someone-wait.jpg"}
const details = {uri:"https://previews.123rf.com/images/carmenbobo/carmenbobo1406/carmenbobo140600527/29167578-stamp-with-word-details-inside.jpg"}
const background = {uri: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"}

const Quiz1 = ({route, navigation}) => {

    const allData = route.params.data
    const id = "62032610069ef9b2616c761e"
    const [isLoading, setLoading] = useState(false);
    const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [tasks, setTasks] = useState();
    const [isCorrect, setIsCorrect] = useState(false);
    const [correctOption, setCorrectOption] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionIndex, setCurrentOptionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null)
    const [isOptionDisabled, setIsOptionDisabled] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [progress, setProgress] = useState(new Animated.Value(0));
    // const progressAnim = progress.interpolate({
    //     inputRange: [0, allData.length],
    //     outputRange: ['0%', '100%']
    // })
    const [showIndicator, setShowIndicator] = useState(true);

    // const [allData, setAllData] = useState();
    const [answers, setAnswers] = useState([]);
    const [name, setName] = useState([]);

    useEffect(() => {
        console.log('Quiz1 screen')
        // setAllData(route.params.data);
        setTasks(allData.tasks)
        console.log('setAllData route.params.data')
        console.log(allData);
        // console.log(allData.tasks[0].answers);
    }, []);




    const renderQuestion = () => {
         // {allData.tasks.map((task) => (
         //                <Text> {task.question} </Text>
         //            ))}
        if (allData.tasks.length !== 0) {
            return (
                <View>
                    <View style={styles.questionPlace}>
                        <Text
                            style={styles.questionText}> {currentQuestionIndex + 1}. {allData.tasks[currentQuestionIndex].question} </Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View>
                    <Text> 0 ? </Text>
                </View>
            )
        }
    };



    const renderOptions = () => {
        if(allData.length!==0){
            return (
                <View style={{marginTop: 18}}>
                    <ButtonOptionWhite w={350} h={60} name={allData.tasks[currentQuestionIndex].answers[0].content} onPress={()=> validateAnswer(allData.tasks[currentQuestionIndex].answers[0].content, 0)}                    />
                    <ButtonOptionWhite w={350} h={60} name={allData.tasks[currentQuestionIndex].answers[1].content} onPress={()=> validateAnswer(allData.tasks[currentQuestionIndex].answers[0].content, 1)}/>
                    <ButtonOptionWhite w={350} h={60} name={allData.tasks[currentQuestionIndex].answers[2].content} onPress={()=> validateAnswer(allData.tasks[currentQuestionIndex].answers[0].content, 2)}/>
                    <ButtonOptionWhite w={350} h={60} name={allData.tasks[currentQuestionIndex].answers[3].content} onPress={()=> validateAnswer(allData.tasks[currentQuestionIndex].answers[0].content, 3)}/>
        </View>
            )
        } else {
            return(
                <View>
                    <Text> 0 ? </Text>
                </View>
            )
        }
    }

    const validateAnswer = (selectedOption, optionIndex) => {
        if (allData.tasks[currentQuestionIndex].answers[currentOptionIndex].isCorrect === true){
            setScore(score + 1)
            console.log("score(ten ok): "+score)
            setCorrectOption(allData.tasks[currentQuestionIndex].answers[currentOptionIndex].content)
            setCurrentOptionSelected(selectedOption);
        }
        setShowNextButton(true);
        console.log("score: "+score)

    }

    const handleNext = () => {
        if (currentQuestionIndex === allData.tasks.length-1){
            //last question, show score modal
            console.log("Modal z wynikiem na true")
            setShowScoreModal(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setIsOptionDisabled(false);
            setShowNextButton(false);
            console.log("current index:" + currentQuestionIndex + "/" + allData.tasks.length)
        }
        // Animated.timing(progress, {
        //     toValue: currentQuestionIndex + 1,
        //     duration: 1000,
        //     useNativeDriver: false
        // }).start();
    }

    const renderNextButton = () => {
        if(showNextButton){
            return(
                <ButtonBlue w={250} h={60} name={"NEXT"} onPress={handleNext} style={{marginTop:20, padding:10}}/>
            )
        } else {
            return null;
        }
    }

    // const renderProgressBar = () => {
    //     return (
    //         <View style={{width: '100%', height: 20, borderRadius: 20, backgroundColor: "#00000020"}}>
    //             <Animated.View style={[{height: 20, borderRadius: 20, backgroundColor: 'aliceblue'}, {
    //                 width: progressAnim
    //             }]}>
    //
    //             </Animated.View>
    //         </View>
    //     )
    // }
    const postData = () => {
        fetch('http://tgryl.pl/quiz/results', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "nick": name,
                "score": score,
                "total": allData.tasks.length,
                "type": allData.tags
            }),
        })
    }
    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0)

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionDisabled(false);
        setShowNextButton(false);
        // Animated.timing(progress, {
        //     toValue: 0,
        //     duration: 1000,
        //     useNativeDriver: false
        // }).start();
    }


    const ModalPart = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={showScoreModal}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <ImageBackground source={image} style={{width: '100%', height: '100%', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={scoreImg} style={{width: 200, height: 200,  marginBottom: 50,  }}/>


                            <Text style={styles.scoreText}> Congratulations </Text>
                            <Text style={styles.scoreText}> {score}/{allData.tasks.length} </Text>

                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                {/* Retry quiz button */}
                                <ButtonBlue
                                    onPress={restartQuiz}
                                    name={"RETRY"}
                                    w={150} h={40} >
                                </ButtonBlue>
                                <ButtonBlue
                                    name={"GO HOME"}
                                    w={150} h={40}
                                    onPress={()=> navigation.navigate('HomeScreen')}
                                                  >
                                </ButtonBlue>
                            </View>
                            <View>
                                <Text> Name: {name} </Text>
                                <TextInput
                                    onChangeText={setName}
                                    value={name}
                                    placeholder="Your name.." />

                                <ButtonBlue w={300} h={50}
                                                  onPress={postData}
                                    name={'SEND RESULTS'}>
                                </ButtonBlue>
                        </View>
                    </ImageBackground>
                </View>
            </Modal>
        )
    }

    return (

        <View >
            {isLoading ?
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={wait} style={{width: 350, height:350}}/>
                    <Text style={{fontWeight: 'bold', fontSize: 30, alignSelf:'center'}}>Loading...</Text>
                </View> :
                (
                    <View>
                        <StartQuiz/>

                        <ActivityIndicator
                            size="large"
                            color="blue"
                            animating={showIndicator}
                            style={styles.activityIndicator} />

                        <ImageBackground source={background} style={{width: '100%', height:'100%'}}>
                            {renderQuestion()}
                            {/*{renderProgressBar()}*/}
                            {renderOptions()}
                            {renderNextButton()}
                            {ModalPart()}
                            <View>
                                <ButtonBlue style={{alignSelf:'flex-end', justifyContent:'flex-end', alignItems:'flex-end', marginTop: 10}} onPress={() => { navigation.navigate('HomeScreen')}} w={250} h={60} name={"GO HOME"}/>
                            </View>
                        </ImageBackground>

                    </View>

                )}
        </View>

    );
}


//
// const getAllData = async () => {
//     const {data} =  await axios.get('https://tgryl.pl/quiz/test/' + id);
//     setAllData(data);
//     console.log('set allData')
//     setQuestionsAndAnswers(data.tasks)
//     console.log(data)
// }
//
export default Quiz1;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
    },
    questionPlace: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        fontSize: 28,
        color: 'black',
        marginBottom: 15,
        marginTop: 8,
    },
    scoreText: {
        fontSize: 30,
        fontWeight: '900',
        color: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    modalButton: {
        paddingVertical: 12,
        margin: 5,
        marginVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 12,
        backgroundColor: 'white',
    },
    correctButton: {
        paddingVertical: 12,
        marginVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 12,
        backgroundColor: 'green',
    },

    answerButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        marginLeft: 10,
    },
    buttonsPlace: {
        marginVertical: 16,
        flex: 1,
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonBottom: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#34A0A4',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    activityIndicator: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
})
