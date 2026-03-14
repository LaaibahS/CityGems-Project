function NameInput({addAmenityForm}){
    return(
        <div>
            <h3>Amenity Name:</h3>
            <input value= {addAmenityForm.amenityName} placeholder="search on the map" readOnly></input>
        </div>
    )
}
export default NameInput