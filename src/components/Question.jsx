import { useEffect, useState, useMemo } from 'react';
import '../styles/Question.css'
import img from '../assets/Check.svg'
import img2 from '../assets/Close.svg'

function Question({id, question, countriesInfo, userPoints, setuserPoints, handleNextQuestion}) {

    
    const threeCountries = useMemo(() => {
        const nineCountries = countriesInfo.filter(
          (country) => country.name.common !== question.answer.name.common
        );
        const shuffledCountries = [...nineCountries].sort(() => 0.5 - Math.random());
        return shuffledCountries.slice(0, 3);
      }, [question.answer]);

    const [buttonPressed, setButtonPressed] = useState(false)

    const handleRightAnswer = (e) => {
        e.preventDefault()
        setButtonPressed(true)
        setuserPoints(userPoints+1)
    }

    const handleWrongAnswer = (e) => {
        e.preventDefault()
        setButtonPressed(true)
    }

    return (
        <>
            <div className="question">{id} {question.question}</div>

        

            <form className='answers'>
                <div onClick={handleRightAnswer} className="rightAnswer"><button className={`btn ${buttonPressed ? 'rightAnswerBtnPressed': 'rightAnswerBtn'}`}>{question.answer != undefined && question.answer.name.common} {buttonPressed && <img src={img}/>}</button></div>

                {threeCountries.map((country, index) => 
                    <div onClick={handleWrongAnswer} key={index}><button className={`btn ${buttonPressed ? 'wrongAnswerBtnPressed': 'wrongAnswerBtn'}`}> {country.name.common} {buttonPressed && <img src={img2}/>}</button></div>
                )}
            </form>
            
        </>
    )
}

export default Question