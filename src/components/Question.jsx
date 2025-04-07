import { useEffect, useState, useMemo } from 'react';
import '../styles/Question.css'
import img from '../assets/Check.svg'
import img2 from '../assets/Close.svg'

function Question({id, question, countriesInfo, userPoints, setuserPoints, questions, setQuestions, selectedAnswers, setSelectedAnswers}) {

    
    const saved = JSON.parse(localStorage.getItem(id))
    console.log('iddddd', id)

    let threeCountries;
    if (!saved) {
    const nineCountries = countriesInfo.filter(
        (country) => country.name.common !== question.answer.name.common
    );
    const shuffledCountries = [...nineCountries].sort(() => 0.5 - Math.random());
    threeCountries = shuffledCountries.slice(0, 3);

    localStorage.setItem(id, JSON.stringify(threeCountries));
    }
    console.log('qqqqqq', saved[0])

    console.log('selected', selectedAnswers)

      
    console.log("dasfsdf", questions.map((q) => 
        q.question == question.question ? {...q, completed: true} : q
    ))


    const handleRightAnswer = (questionId) => (e) => {
        e.preventDefault()
        if (!question.completed){
            setuserPoints(userPoints+1)
            setQuestions(questions.map((q) => 
                (q.question == question.question ? {...q, completed: true} : q)
            ))
            setSelectedAnswers((prev) => ({
                ...prev,
                [questionId]: question.answer,
            }))
        }
    }

    const handleWrongAnswer = (questionId, country) => (e) => {
        e.preventDefault()
        if (!question.completed){
            setQuestions(questions.map((q) => 
                (q.question == question.question ? {...q, completed: true} : q)
            ))
            setSelectedAnswers((prev) => ({
                ...prev,
                [questionId]: country.name.common,
            }))
        }
    }

    return (
        <>
            <div className="question">{question.question}</div>

        

            <form className='answers'>
                <div onClick={handleRightAnswer(question.id)}><button className={`btn ${question.completed && (selectedAnswers[question.id] === question.answer ? 'coloredAnswer' : 'unColoredAnswer')}`}>{question.answer != undefined && question.answer.name.common} {question.completed && <img src={img}/>}</button></div>

                {saved.map((country, index) => 
                    <div onClick={handleWrongAnswer(question.id, country)} key={index}><button className={`btn ${question.completed && (selectedAnswers[question.id] === country.name.common ? 'coloredAnswer' : 'unColoredAnswer')}`}> {country.name.common} {question.completed && <img src={img2}/>}</button></div>
                )}
            </form>
            
        </>
    )
}

export default Question