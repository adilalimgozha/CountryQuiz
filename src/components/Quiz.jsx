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
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const api = 'https://restcountries.com/v3.1/all'
    axios.get(api).then((resp) => {
        const allCountries = resp.data.slice(0, 10)
        SetCountriesInfo(allCountries)
        const newQuestions = allCountries.map((country, index) => ({
          id: index + 1,
          question: `Question ${index + 1}`,
          answer: country,
          completed: false
        }));
        setQuestions(newQuestions)
    })
    
  }, []);

  
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
  console.log(questions)

  return <div className="quiz">

    <header>
        <h2>Country Quiz</h2> 
        <h3>{userPoints}/10 Points</h3>
    </header>

    <div className="main">
        <button className="next_prev_btn" onClick={handlePrevQuestion}><AiFillCaretLeft /></button>
        <div className="question">
        <Card questions={questions} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}>
            {questions.filter((question, index) => index+1 == currentQuestion).map((question, index) => (

                <Question key={index} 
                id={index+1} 
                question={question} 
                countriesInfo={countriesInfo} 
                userPoints={userPoints} 
                setuserPoints={setuserPoints} 
                handleNextQuestion={handleNextQuestion}
                questions = {questions}
                setQuestions={setQuestions}
                />

                
                ))    
            }
        </Card>
        </div>
        <button className="next_prev_btn" onClick={handleNextQuestion}><AiFillCaretRight /></button>
    </div>

  </div>;
}

export default Quiz;