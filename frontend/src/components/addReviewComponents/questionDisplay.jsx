import YesNoButtons from "./yesNoButtons"

const QuestionDisplay = ({questions, setAnswers}) => {

    return(
        <div>
            <div className= "questions">
                {questions.map((question) =>(
                    <div className="questions" key = {question.id}>
                        <h3 >{question.fullQuestions}</h3>
                        <YesNoButtons questionId= {question.id} setAnswers={setAnswers}/>
                        <br/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default QuestionDisplay