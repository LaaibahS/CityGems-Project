import {Link} from 'react-router-dom'

//FOR THE BUTTON, IF NO FIELDS HAVE BEEN FILLED OUT THEN JUST REDIRECT
//IF FIELDS HAVE BEEN FILLED OUT, CREATE A NEW AMENITY
function AddButton(){
    return(
        <div>
            <Link to="/home">
                <button>Add</button>
            </Link>
            
        </div>
    )
}
export default AddButton