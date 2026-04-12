import { useEffect, useState } from "react"

function ReviewSummary({amenity}){

    const amenityId = amenity.amenityId
    const [summary, setSummary] = useState([
        {
            "percentage": 0,
            "phrase_display": ""
        },
        {
            "percentage": 0,
            "phrase_display": ""
        },
        {
            "percentage": 0,
            "phrase_display": ""
        }])

    const [averageRating, setAverageRating] = useState(0)

    useEffect(() => {
        fetchReviewSummary()
      }, [])

    const fetchReviewSummary = async () => {
    const response = await fetch(`http://127.0.0.1:5000/amenities/${amenityId}/review_summary`)
    const data = await response.json()
    setAverageRating(data.averageRating)
    setSummary(data.summaries)
    console.log("summaries: ", data.summaries)
    console.log("average rating for amenity:", data.averageRating)
  }

    return(
        <div className="reviewSummaries">
            <div className="circle1">
                <p>{summary[0].percentage}% of students agree this place {summary[0].phrase_display}</p>
            </div>
            <div className="circle2">
                <p>{summary[1].percentage}% of students agree this place {summary[1].phrase_display}</p>
            </div>
            <div className="circle3">
                <p>{summary[2].percentage}% of students agree this place {summary[2].phrase_display}</p>
            </div>
            <div className= "ratingCircle">
                <p className="ratingText"> average rating: {averageRating.toFixed(2)}</p>
            </div>
        </div>
    )
}
export default ReviewSummary