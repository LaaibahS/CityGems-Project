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
        <div>
            {amenities.map((amenity) =>(
                <h3 key = {amenity.amenityId}>{amenity.amenityName}
                    <div >{amenity.amenityAddress}</div>
                </h3>
            ))}
        </div>
    )
}
export default AmenityList