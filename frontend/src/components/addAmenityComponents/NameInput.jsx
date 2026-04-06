function NameInput({addAmenityForm}){
    return(
        <div>
            <div className="nameLabel">
                <h3>Amenity Name:</h3>
            </div>
            <input className = "autocompleteName" value= {addAmenityForm.amenityName} placeholder="Use the map's search bar" readOnly></input>
        </div>
    )
}
export default NameInput