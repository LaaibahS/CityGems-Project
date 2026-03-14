function AddAddress({addAmenityForm}){
    return(
        <div>
            <h3>Amenity Address:</h3>
            <h6>(Use the searchbar above the map to find a place!)</h6>
            <div>
                <input value= {addAmenityForm.amenityAddress} placeholder="search on the map" readOnly></input>
            </div>
        </div>
    )
}
export default AddAddress