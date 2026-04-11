import { useState } from "react"

//used ai to do the styling of the buttons so that when they're selected, they go a different, darker colour

function YesNoButtons({ questionId, setAddReviewForm }) {

    const [selected, setSelected] = useState(null)


    const handleClick = (value) => {
        console.log("entered handleClick")
        setSelected(value)
        
        setAddReviewForm(prev => {

            const filtered = prev.answers.filter(
                a => a.questionId !== questionId
            )

            return {
                ...prev,
                answers: [
                    ...filtered,
                    { questionId: questionId, answerButton: value }
                ]
            }   
        })
    }

    return (
        <div className="answerButtons">
            <button style={{ backgroundColor: selected === "y" ? "#741212" : "#fc0000" }} className = "yesButton" 
            type="button" 
            onClick={() => handleClick("y")}>Yes</button>
            <br />
            <button style={{ backgroundColor: selected === "n" ? "#741212" : "#fc0000" }} className = "noButton" 
            type="button" 
            onClick={() => handleClick("n")}>No</button>
        </div>
    )
}
export default YesNoButtons