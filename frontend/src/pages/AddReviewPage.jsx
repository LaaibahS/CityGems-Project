import QuestionDisplay from "../components/addReviewComponents/questionDisplay"
import TotalRatingDropDownMenu from "../components/addReviewComponents/TotalRatingDropDownMenu"
import AddReviewButton from "../components/addReviewComponents/AddReviewButton"
import "../styles/AddReviewPage.css"
import { useState, useEffect} from "react"
import BackButton from "../components/addAmenityComponents/BackButton"
import { Link } from "react-router-dom"
import {useLocation} from "react-router-dom"

//added places for the questions to go but in QuestionDisplay, need to extract the individual questions
//may actually have to make the questions and answe buttons into a combined component
// ^^ so that the answer buttons are linked directly to each question
function AddReviewPage(){

    //NOTE: to get the amenityID need to send the amenity details in state when 
    //^^ "add review" button is clicked for a certain amenity
    //NOTE: to get studentID, may need to flush the id in the backend and send to homepage
    //^^ can then be sent to this page alongside amenityID
    
    const location = useLocation()
    //console.log("location stuff: ", location)
    //console.log("state stuff:", location.state)
    //console.log("amenityId", location.state.amenityId)
    //console.log("typeId:", location.state.amenityTypeId)

    const reviewAmenityId = location.state.amenityId
    const reviewAmenityTypeId = location.state.amenityTypeId
    const studentId = localStorage.getItem("studentId")

    const [addReviewForm, setAddReviewForm] = useState({
            amenityId: reviewAmenityId,
            studentId: studentId,
            overallRating: null,
            answers: []
        })
    
    const [questions, setQuestions] = useState([])

     
        
    useEffect(() => {
        fetchQuestions()
        console.log("form data:", addReviewForm)
    }, [])
    
    const fetchQuestions = async () => {
        const response = await fetch(`http://127.0.0.1:5000/amenity_types/${reviewAmenityTypeId}/questions`)
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
                    <QuestionDisplay questions = {questions} setAddReviewForm= {setAddReviewForm}/>
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
        <br/>
        <Link to= "/home">
            <BackButton/>
        </Link>
        </div>
    )
}
export default AddReviewPage