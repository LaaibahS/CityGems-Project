import QuestionDisplay from "../components/addReviewComponents/questionDisplay"
import YesNoButtons from "../components/addReviewComponents/yesNoButtons"
import TotalRatingDropDownMenu from "../components/addReviewComponents/TotalRatingDropDownMenu"
import "../styles/AddReviewPage.css"

//added places for the questions to go but in QuestionDisplay, need to extract the individual questions
//may actually have to make the questions and answe buttons into a combined component
// ^^ so that the answer buttons are linked directly to each question
function AddReviewPage(){
    return(
        <div>
            <div className="question1">
                <QuestionDisplay/>
                <br/>
                <YesNoButtons/>
            </div>
            <br/>
           <div className="question2">
                <QuestionDisplay/>
                <br/>
                <YesNoButtons/>
            </div>
            <br/>
            <div className="question3">
                <QuestionDisplay/>
                <br/>
                <YesNoButtons/>
            </div>
            <div>
                <TotalRatingDropDownMenu/>
            </div>

        </div>
    )
}
export default AddReviewPage