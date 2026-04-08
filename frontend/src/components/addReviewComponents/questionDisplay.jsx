import YesNoButtons from "./yesNoButtons"

const QuestionDisplay = ({questions, setAddReviewForm}) => {

    return(
        <div className="questionForm">
            {/* <h3 className="introToQuestions">1: Review the amenity</h3> */}
            <div className="questions">
                {questions.map((question) =>(
                    <div key = {question.id}>
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