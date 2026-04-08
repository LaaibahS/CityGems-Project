function YesNoButtons({ questionId, setAddReviewForm }) {

    const handleClick = (value) => {
        console.log("entered handleClick")

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
            <button className = "yesButton" 
            type="button" 
            onClick={() => handleClick("y")}>Yes</button>
            <br />
            <button className = "noButton" 
            type="button" 
            onClick={() => handleClick("n")}>No</button>
        </div>
    )
}
export default YesNoButtons