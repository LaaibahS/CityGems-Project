import QuestionDisplay from "./questionDisplay"

function YesNoButtons({questionId, setAnswers}){

    const handleClick = (value) => {
        console.log("entered handleClick")
        setAnswers(prev => ({
            ...prev, 
            answers: [
                {questionId: questionId, answerButton: value}
            ]
        }))
    }
    return(
        <div className= "answerButtons">
            <button onClick={() => handleClick("y")}>Yes</button>
            <br/>
            <button onClick={() => handleClick("n")}>No</button>
        </div>
    )
}
export default YesNoButtons