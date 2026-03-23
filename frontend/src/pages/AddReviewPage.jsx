import QuestionDisplay from "../components/addReviewComponents/questionDisplay"
import YesNoButtons from "../components/addReviewComponents/yesNoButtons"
import TotalRatingDropDownMenu from "../components/addReviewComponents/TotalRatingDropDownMenu"
import AddReviewButton from "../components/addReviewComponents/AddReviewButton"
import "../styles/AddReviewPage.css"

//added places for the questions to go but in QuestionDisplay, need to extract the individual questions
//may actually have to make the questions and answe buttons into a combined component
// ^^ so that the answer buttons are linked directly to each question
function AddReviewPage(){

    const [addReviewForm, setAddReviewForm] = useState({
            //here gonna add the review/questionAnswer data
        })
    
    const [questions, setQuestions] = useState([])
     
        
    useEffect(() => {
        fetchQuestions()
    }, [])
    
    const fetchQuestions = async () => {
        const response = await fetch("http://127.0.0.1:5000/amenity_types/1/questions")
        const data = await response.json()
        setAmenities(data.questions)
        console.log(data.questions)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault() 
        const data = (addReviewForm)
        console.log("creating a review!")

        const url = "http://127.0.0.1:5000/add_amenities"
        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)

        if(response.status !== 201 && response.status !== 200){
            const error = await response.json()
            alert(error.message)
        }
    }

    return(
        <div className="addReviewPage">
            <form onSubmit= {handleSubmit}>
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
                <br/>
                <div>
                    <TotalRatingDropDownMenu/>
                </div>
                <br/>
                <div>
                    <AddReviewButton/>
                </div>
        </form>
        </div>
    )
}
export default AddReviewPage