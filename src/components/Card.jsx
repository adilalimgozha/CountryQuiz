import '../styles/Card.css'

function Card({children, questions, setCurrentQuestion}) {

    function handleChangeCurrentQuestion(num) {
        setCurrentQuestion(num)
    }

    

    return (
        <>
        <div className='card'>
            <div className='num_btns'>
                {questions.map((question) => 
                    <button className={`num_btn ${question.completed && 'completed'}`}  onClick={() => handleChangeCurrentQuestion(question.id)} key={question.id} value={question.id}>{question.id}</button>
                )}
            </div>

            <div>
                {children}
            </div>
        </div>
        </>
    )
}

export default Card