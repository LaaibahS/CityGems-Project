import QuestionDisplay from "../components/addReviewComponents/questionDisplay"
import TotalRatingDropDownMenu from "../components/addReviewComponents/TotalRatingDropDownMenu"
import AddReviewButton from "../components/addReviewComponents/AddReviewButton"
import "../styles/AddReviewPage.css"
import { useState, useEffect, use } from "react"

//added places for the questions to go but in QuestionDisplay, need to extract the individual questions
//may actually have to make the questions and answe buttons into a combined component
// ^^ so that the answer buttons are linked directly to each question
function AddReviewPage(){

    const [addReviewForm, setAddReviewForm] = useState({
            amenityId: "",
            studentId: "",
            overallRating: "",
            answers: []
        })
    
    const [questions, setQuestions] = useState([])

    const [answers, setAnswers] = useState([])
     
        
    useEffect(() => {
        fetchQuestions()
    }, [])
    
    //so far just rendered questions for type 1, need to render the other types' questions too
    const fetchQuestions = async () => {
        const response = await fetch("http://127.0.0.1:5000/amenity_types/1/questions")
        console.log("status:", response.status)
        const data = await response.json()
        console.log("data: ", data)
        setQuestions(data)
        
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault() 
        const data = (addReviewForm)
        console.log("creating a review!")

        const url = "http://127.0.0.1:5000/reviews"
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
                <div className="questions">
                    <QuestionDisplay questions = {questions} setAnswers= {setAnswers}/>
                </div>
                <br/>
                <div className="rating">
                    <TotalRatingDropDownMenu setAddReviewForm={setAddReviewForm}/>
                </div>
                <br/>
                <div className="reviewButton">
                    <AddReviewButton/>
                </div>
        </form>
        </div>
    )
}
export default AddReviewPage