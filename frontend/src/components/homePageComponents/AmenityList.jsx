import { useNavigate } from "react-router-dom"
import ReviewSummary from "./ReviewSummary"

const AmenityList = ({amenities, setAmenityPlaceId}) => {

    const navigate = useNavigate()

    const handleClick = (amenity) => {
        navigate("/addReview", {
            state: {
                amenityId: amenity.amenityId,
                amenityTypeId: amenity.amenityTypeId,
                amenityName: amenity.amenityName
            }
        })
    }

    const handleDirectionsClick = (amenity) => {
        setAmenityPlaceId(amenity.amenityPlaceId)
    }

    return(
        //show the amenity name and its address underneath
        <div className="amenityList">
            {amenities.map((amenity) =>(
                <div className= "amenities">
                     <h3 key = {amenity.amenityId}>{amenity.amenityName}</h3>
                    <div className="addresses">
                        <h5>
                            {amenity.amenityAddress}
                        </h5>
                    </div>
                    <div>
                        <ReviewSummary amenity = {amenity}/>
                    </div>
                    <div className="directionsButton">
                        <div className="addReviewButton">
                            <button onClick={() => handleClick(amenity)}>Add Review</button>
                        </div>
                        <br/>
                        <div>
                            <button onClick = {() => handleDirectionsClick(amenity)}>Get Directions</button>
                        </div>
                        
                    </div>
                </div>
               
            ))}
        </div>
    )
}
export default AmenityList