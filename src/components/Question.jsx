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
    
    
    const [selectedAnswer, setSelectedAnswer] = useState(null);

      
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
            setSelectedAnswer(question.answer)
        }
    }

    const handleWrongAnswer = (country) => (e) => {
        e.preventDefault()
        if (!question.completed){
            setQuestions(questions.map((q) => 
                (q.question == question.question ? {...q, completed: true} : q)
            ))
            setSelectedAnswer(country.name.common)
        }
    }

    return (
        <>
            <div className="question">{question.question}</div>

        

            <form className='answers'>
                <div onClick={handleRightAnswer}><button className={`btn ${question.completed && (selectedAnswer === question.answer ? 'coloredAnswer' : 'unColoredAnswer')}`}>{question.answer != undefined && question.answer.name.common} {question.completed && <img src={img}/>}</button></div>

                {threeCountries.map((country, index) => 
                    <div onClick={handleWrongAnswer(country)} key={index}><button className={`btn ${question.completed && (selectedAnswer === country.name.common ? 'coloredAnswer' : 'unColoredAnswer')}`}> {country.name.common} {question.completed && <img src={img2}/>}</button></div>
                )}
            </form>
            
        </>
    )
}

export default Question