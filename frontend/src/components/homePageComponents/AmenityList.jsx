import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const AmenityList = ({amenities}) => {

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

    //sent the amenity details to the addReviewPage, but needs to be only one specific amenity, not all of them


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
                    <div className="reviewSummaries">
                        <div className="circle1">placeholder1</div>
                        <div className="circle2">placeholder2</div>
                        <div className="circle3">placeholder3</div>
                        <div className= "ratingCircle">average rating</div>
                    </div>
                    <div className="directionsButton">
                        <div className="addReviewButton">
                            {/* <Link to= "/addReview"> */}
                                <button onClick={() => handleClick(amenity)}>Add Review</button>
                            {/* </Link> */}
                            
                        </div>
                        <br/>
                        <div>
                            <button>Get Directions</button>
                        </div>
                        
                    </div>
                </div>
               
            ))}
        </div>
    )
}
export default AmenityList