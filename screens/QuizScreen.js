import * as React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  Animated,
  Modal,
  SafeAreaView, ActivityIndicator, TextInput
} from 'react-native'
import {useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const image = {uri: "https://t3.ftcdn.net/jpg/02/64/42/56/240_F_264425633_KujfwIjGkKjZF4niKgDbz3QKBmNupLCz.jpg"};
const back = {uri: "https://thumbs.dreamstime.com/b/smoke-floor-isolated-black-background-misty-fog-effect-texture-overlays-text-space-smoke-fog-misty-overltays-effect-134306702.jpg"}
const gradient = {uri: "https://www.creativefabrica.com/wp-content/uploads/2020/04/18/Light-Blue-Gradient-Background-Graphics-3899476-1-580x387.jpg"}
const nextButton = {uri: "https://www.creativefabrica.com/wp-content/uploads/2020/03/08/Light-Blue-Simple-Gradient-Background-Graphics-3307511-1-580x387.jpg"}
const next = {uri: "https://img.redro.pl/fototapety/blue-light-gradient-background-smooth-blue-blurred-abstract-700-198099226.jpg"}


const QuizScreen = ({navigation, data, onPress}) => {

  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null)
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ['0%', '100%']
  })
  const [showIndicator, setShowIndicator] = useState(true);
  const [name, setName] = useState('');


  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionDisabled(true);
    if (selectedOption === correct_option) {
      //Set Score
      setScore(score + 1)
    }
    //Show Next Button1
    setShowNextButton(true)
  }

  const handleNext = () => {
    if (currentQuestionIndex === allQuestions.length - 1) {
      //last question
      //show score modal
      console.log("SHOW SCORE MODAL NA TRUE")
      setShowScoreModal(true)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionDisabled(false);
      setShowNextButton(false);
      console.log("current index:" + currentQuestionIndex)
      console.log("all:")
      console.log(allQuestions.length - 1)
      console.log("modal:" + showScoreModal)

    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false
    }).start();
  }

  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0)

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false
    }).start();
  }

  const renderQuestion = () => {
    return (
        <View>
          {/*Question*/}
          <View style={styles.questionPlace}>
            <Text style={styles.questionText}>  {currentQuestionIndex + 1}. {allQuestions[currentQuestionIndex]?.question} </Text>
          </View>

        </View>
    )
  }

  const renderOptions = () => {
    return (
        <View style={{marginTop: 18}}>
          {
            allQuestions[currentQuestionIndex]?.options.map(option => (
                <TouchableOpacity
                    onPress={() => validateAnswer(option)}
                    key={option}
                    style={{        borderWidth: 1,
                      borderColor: 'grey',
                      height: 60,
                      width: 350,
                      alignSelf: 'center',
                      alignContent: 'center',
                      borderRadius: 20,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginVertical: 5}} >

                  <ImageBackground source={gradient} style={{height:'100%', width: 300, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }} imageStyle={{borderRadius: 20, width:350}}>
                    <Text style={styles.answerButtonText}> {option} </Text>
                  </ImageBackground>


                  {
                    option == correctOption ? (
                        <View
                            style={{
                              backgroundColor: '#4ae100', height: 30, width: 30, marginRight: 10,
                              borderRadius: 15, alignItems: 'center', justifyContent: 'center',
                              borderWidth: 1, borderColor: '#71ff31'
                            }}>
                          <MaterialCommunityIcons name="check" style={{
                            color: 'white',
                            fontSize: 20
                          }}/>
                        </View>
                    ) : option == currentOptionSelected ? (
                        <View
                            style={{
                              backgroundColor: '#ff1313', height: 30, width: 30, marginRight: 10,
                              borderRadius: 15, alignItems: 'center', justifyContent: 'center',
                              borderWidth: 1, borderColor: '#ff1e1e'
                            }}>
                          <MaterialCommunityIcons name="close" style={{
                            color: 'white',
                            fontSize: 20
                          }}/>
                        </View>
                    ) : null
                  }
                </TouchableOpacity>
            ))
          }
        </View>
    )
  }

  const renderNextButton = () => {
    if (showNextButton) {
      return (
          <TouchableOpacity
              onPress={handleNext} >
            <ImageBackground source={next} imageStyle={{borderRadius: 25}} style={{
              borderWidth: 1,
              borderColor: 'grey',
              height: 60,
              width: 350,
              alignSelf: 'center',
              borderRadius: 25,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 5}}>
              <Text style={styles.answerButtonText}> next </Text>
            </ImageBackground>
          </TouchableOpacity>
      )
    } else {
      return null
    }
  }

  const renderProgressBar = () => {
    return (
        <View style={{width: '100%', height: 20, borderRadius: 20, backgroundColor: "#00000020"}}>
          <Animated.View style={[{height: 20, borderRadius: 20, backgroundColor: 'aliceblue'}, {
            width: progressAnim
          }]}>

          </Animated.View>
        </View>
    )
  }

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
        "total": allQuestions.length,
        "type": "Everything"
      }),
    })
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
              <View style={{backgroundColor: 'rgba(255,255,255,0.53)', borderRadius: 25}}>
                <Text style={styles.scoreText}> Congratulations </Text>
                <Text style={styles.scoreText}> {score}/{allQuestions.length} </Text>

                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  {/* Retry quiz button */}
                  <TouchableOpacity
                      onPress={restartQuiz}
                      style={styles.modalButton}>
                    <Text style={styles.answerButtonText}> RETRY </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButton}
                                    onPressOut={restartQuiz}
                                    onPress={onPress}>
                    <Text style={styles.answerButtonText}> GO GOME </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text> Name: {name} </Text>
                  <TextInput
                    onChangeText={setName}
                    value={name}
                    placeholder="Your name.." />

                  <TouchableOpacity style={styles.modalButton}
                                    onPress={postData}>
                    <Text style={styles.answerButtonText}> SEND RESULTS </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        </Modal>
    )
  }


  return (
      <SafeAreaView>

      <ActivityIndicator
          size="large"
          color="blue"
          animating={showIndicator}
          style={styles.activityIndicator} />

      <ImageBackground source={back} style={{height: '100%', width: '100%'}}>



        <SafeAreaView style={{flex: 1}}>

          {renderQuestion()}

          {renderProgressBar()}

          {renderOptions()}

          {renderNextButton()}

          {ModalPart()}

          <View style={styles.bottom}>
            <TouchableOpacity style={styles.answerButton} onPress={onPress}>
              <ImageBackground source={next} imageStyle={{borderRadius: 25}} style={{
                borderWidth: 1,
                borderColor: 'grey',
                height: 60,
                width: 120,
                borderRadius: 25,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: 'black',}}> GO HOME </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </ImageBackground>
      </SafeAreaView>
  )
};

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
    color: 'white',
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
  answerButton: {
    borderWidth: 1,
    borderColor: '#000000',
    height: 60,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  nextButton: {
    borderWidth: 3,
    borderColor: 'rgba(255,185,151,0.87)',
    backgroundColor: '#ff9468',
    height: 60,
    width: 120,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10
  },
  goHomeButton: {
    borderWidth: 3,
    borderColor: '#fc9e76',
    backgroundColor: '#000000',
    height: 60,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10
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

export default QuizScreen;
