import YesNoButtons from "./yesNoButtons"

const QuestionDisplay = ({questions, setAddReviewForm}) => {

    return(
        <div>
            <div className= "questions">
                {questions.map((question) =>(
                    <div className="questions" key = {question.id}>
                        <h3 >{question.fullQuestions}</h3>
                        <YesNoButtons questionId= {question.id} 
                        setAddReviewForm={setAddReviewForm}/>
                        <br/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default QuestionDisplay