import React, { useState, useEffect } from "react";
import '../styles/Quiz.css'
import axios from 'axios'
import Question from "./Question";
import Card from "./Card";
import { AiFillCaretRight, AiFillCaretLeft  } from "react-icons/ai";

function Quiz() {
  const [countriesInfo, SetCountriesInfo] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [userPoints, setuserPoints] = useState(0)

  useEffect(() => {
    const api = 'https://restcountries.com/v3.1/all'
    axios.get(api).then((resp) => {
        const allCountries = resp.data.slice(0, 10)
        SetCountriesInfo(allCountries)
    })
  }, []);

  let questions = [{
    question: "What is ",
    answer: countriesInfo[0]
  }, 
  {
    question: "lolka ",
    answer: countriesInfo[1]
  },
  {
    question: "ds ",
    answer: countriesInfo[2]
  },
  {
    question: "fs ",
    answer: countriesInfo[3]
  },
  {
    question: "faafe",
    answer: countriesInfo[4]
  },
  {
    question: "faaew",
    answer: countriesInfo[5]
  },
  {
    question: "faeef",
    answer: countriesInfo[6]
  },
  {
    question: "faee",
    answer: countriesInfo[7]
  },
  {
    question: "faeef",
    answer: countriesInfo[8]
  },
  {
    question: "faeafeds",
    answer: countriesInfo[9]
  }]


  const handleAnswer = (questionIndex, answerIndex) => {
    // Update user's answer for the current question
  };

  const handleNextQuestion = () => {
    if (currentQuestion < 10) {
        setCurrentQuestion(currentQuestion+1)
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 1) {
        setCurrentQuestion(currentQuestion-1)
    }
  };

  const handleFinishQuiz = () => {
    // Calculate the quiz result and show the result page
  };

  console.log(currentQuestion)

  return <div className="quiz">

    <header>
        <h2>Country Quiz</h2> 
        <h3>{userPoints}/10 Points</h3>
    </header>

    <div className="main">
        <button className="next_prev_btn" onClick={handlePrevQuestion}><AiFillCaretLeft /></button>
        <div className="question">
        <Card currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}>
            {questions.filter((question, index) => index+1 == currentQuestion).map((question, index) => (

                <Question key={index} 
                id={index+1} 
                question={question} 
                countriesInfo={countriesInfo} 
                userPoints={userPoints} 
                setuserPoints={setuserPoints} 
                handleNextQuestion={handleNextQuestion}/>

                
                ))    
            }
        </Card>
        </div>
        <button className="next_prev_btn" onClick={handleNextQuestion}><AiFillCaretRight /></button>
    </div>

  </div>;
}

export default Quiz;