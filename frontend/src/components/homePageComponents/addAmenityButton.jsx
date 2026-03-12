import {Link} from 'react-router-dom'

function AddAmenityButton(){
    return(
        <div>
            <Link to= "/addAmenity">
                <button>Add Amenity</button>
            </Link>
            
        </div>
    )
}
export default AddAmenityButton