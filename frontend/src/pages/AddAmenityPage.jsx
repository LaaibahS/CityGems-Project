import TypeDropDownMenu from "../components/addAmenityComponents/TypeDropDownMenu";
import AddButton from "../components/addAmenityComponents/AddButton";
import NameInput from "../components/addAmenityComponents/NameInput";
import AddAddress from "../components/addAmenityComponents/AddAddress";
import PlacesAPI from "../components/addAmenityComponents/PlacesAPI";

import { useState } from "react";

function AddAmenityPage(){

    const [addAmenityForm, setAddAmenityForm] = useState({
        amenityName: "",
        amenityAddress: "",
        amenityPlaceId: "",
        amenityTypeId: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault() 
        const data = (addAmenityForm)
        console.log("creating an amenity!")

        const url = "http://127.0.0.1:5000/add_amenities"
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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <TypeDropDownMenu setAddAmenityForm= {setAddAmenityForm} />
                </div>
                <br/>
                <div>
                    <AddAddress addAmenityForm= {addAmenityForm}/>
                </div>
                <br/>
                <div>
                    <NameInput addAmenityForm= {addAmenityForm}/>
                </div>
                <br/>
                <div>
                    <PlacesAPI setAddAmenityForm={setAddAmenityForm}/>
                </div>
                <br/>
                <div>
                    <AddButton addAmenityForm= {addAmenityForm}/>
                </div>  
            </form>          
        </div>
    )
}
export default AddAmenityPage

//GOTTA FIX THE OUT OF LONDON BOUNDS ISSUE AGAIN AND MAKE THE ADD BUTTON SUBMIT AN AMENITY
//GOTTA ALSO DISABLE THE ADD BUTTON UNTIL THE FIELDS ARE ALL FILLED OUT!!