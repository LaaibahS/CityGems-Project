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
        amenityType: ""
    })

    return(
        <div>
            <div>
                <TypeDropDownMenu addAmenityForm= {addAmenityForm} setAddAmenityForm= {setAddAmenityForm}/>
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
        </div>
    )
}
export default AddAmenityPage