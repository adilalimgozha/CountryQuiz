import '../styles/Card.css'

function Card({children, setCurrentQuestion}) {

    const button_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function handleChangeCurrentQuestion(num) {
        setCurrentQuestion(num)
    }

    return (
        <>
        <div className='card'>
            <div className='num_btns'>
                {button_number.map((number) => 
                    <button className='num_btn' onClick={() => handleChangeCurrentQuestion(number)} key={number} value={number}>{number}</button>
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