import React from 'react'

const AmenityList = ({amenities}) => {
    return(
        // <div>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th> Name</th>
        //                 <th> Address</th>
        //                 {/* <th> Post Code</th> */}
        //             </tr>
        //         </thead>
        //         <tbody>
        //                 {amenities.map((amenity) => (
        //                     <tr key= {amenity.amenityId}>
        //                         <td>{amenity.amenityName}</td>
        //                         <td>{amenity.amenityAddress}</td>
        //                         {/* <td>{amenity.amenityPostcode}</td>
        //                         <td>{amenity.amenityTypeId}</td> */}
        //                     </tr>
        //                 ))}
        //         </tbody>
        //     </table>
        // </div>

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
                        <button>Get Directions</button>
                    </div>
                    <div>
                        <button>Add Review</button>
                    </div>
                    
                </div>
               
            ))}
        </div>
    )
}
export default AmenityList