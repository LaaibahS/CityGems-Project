function AddAddress({addAmenityForm}){
    return(
        <div>
            <div className="addressLabel">
                <h3>Amenity Address:</h3>
            </div>
            <div>
                <input className = "autocompleteAddress" value= {addAmenityForm.amenityAddress} placeholder="Use the map's search bar" readOnly></input>
            </div>
        </div>
    )
}
export default AddAddress