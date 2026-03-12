import TypeDropDownMenu from "../components/addAmenityComponents/TypeDropDownMenu";
import AddButton from "../components/addAmenityComponents/AddButton";
import NameInput from "../components/addAmenityComponents/NameInput";
import AddAddress from "../components/addAmenityComponents/AddAddress";
import PlacesAPI from "../components/addAmenityComponents/PlacesAPI";

function AddAmenityPage(){
    return(
        <div>
            <div>
                <TypeDropDownMenu/>
            </div>
            <br/>
             <div>
                <AddAddress/>
            </div>
            <br/>
            <div>
                <NameInput/>
            </div>
            <br/>
            <div>
                <PlacesAPI/>
            </div>
            <br/>
            <div>
                <AddButton/>
            </div>            
        </div>
    )
}
export default AddAmenityPage