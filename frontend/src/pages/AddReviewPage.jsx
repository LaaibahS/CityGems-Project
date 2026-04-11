import QuestionDisplay from "../components/addReviewComponents/questionDisplay"
import TotalRatingDropDownMenu from "../components/addReviewComponents/TotalRatingDropDownMenu"
import AddReviewButton from "../components/addReviewComponents/AddReviewButton"
import "../styles/AddReviewPage.css"
import { useState, useEffect } from "react"
import BackButton from "../components/addAmenityComponents/BackButton"
import { useLocation } from "react-router-dom"

function AddReviewPage() {

    const location = useLocation()
    const reviewAmenityName = location.state.amenityName
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

        if (response.status !== 201 && response.status !== 200) {
            const error = await response.json()
            alert(error.message)
        }
        else {
            alert("review has been added!")
        }
    }

    return (
        <div className="addReviewPage">
            <form onSubmit={handleSubmit}>
                <div className="title">
                    <div>
                        Review for: {reviewAmenityName}
                    </div>

                </div>
                <div className="reviewAndRatingCard">
                    <QuestionDisplay questions={questions} setAddReviewForm={setAddReviewForm} />
                    <TotalRatingDropDownMenu setAddReviewForm={setAddReviewForm} />


                    <div className="reviewButton">
                        <AddReviewButton />
                    </div>
                </div>
            </form>
            <div className="backToHome">
                <BackButton />
            </div>
        </div>
    )
}
export default AddReviewPage