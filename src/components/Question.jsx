import { useEffect, useState, useMemo } from 'react';
import '../styles/Question.css'
import img from '../assets/Check.svg'
import img2 from '../assets/Close.svg'

function Question({id, question, countriesInfo, userPoints, setuserPoints, questions, setQuestions}) {

    
    const threeCountries = useMemo(() => {
        const nineCountries = countriesInfo.filter(
          (country) => country.name.common !== question.answer.name.common
        );
        const shuffledCountries = [...nineCountries].sort(() => 0.5 - Math.random());
        return shuffledCountries.slice(0, 3);
      }, [question.answer]);

      
    console.log("dasfsdf", questions.map((q) => 
        q.question == question.question ? {...q, completed: true} : q
    ))


    const handleRightAnswer = (e) => {
        e.preventDefault()
        if (!question.completed){
            setuserPoints(userPoints+1)
            setQuestions(questions.map((q) => 
                (q.question == question.question ? {...q, completed: true} : q)
            ))
        }
    }

    const handleWrongAnswer = (e) => {
        e.preventDefault()
        if (!question.completed){
            setQuestions(questions.map((q) => 
                (q.question == question.question ? {...q, completed: true} : q)
            ))
        }
    }

    return (
        <>
            <div className="question">{question.question}</div>

        

            <form className='answers'>
                <div onClick={handleRightAnswer}><button className={`btn ${question.completed ? 'rightAnswerBtnPressed': 'rightAnswerBtn'}`}>{question.answer != undefined && question.answer.name.common} {question.completed && <img src={img}/>}</button></div>

                {threeCountries.map((country, index) => 
                    <div onClick={handleWrongAnswer} key={index}><button className={`btn ${question.completed ? 'wrongAnswerBtnPressed': 'wrongAnswerBtn'}`}> {country.name.common} {question.completed && <img src={img2}/>}</button></div>
                )}
            </form>
            
        </>
    )
}

export default Question