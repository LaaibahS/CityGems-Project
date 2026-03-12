function TypeDropDownMenu(){
    return(
        <div>
            {/* <label for="amenityType">Amenity Type: </label> */}
            <h3>Amenity Type:</h3>
            <input list="types" id="amenityType" name="amenityType"/>
            <datalist id="types">
                <option value="Food"></option>
                <option value="Study"></option>
                <option value="Activity"></option>
          </datalist>

        </div>
    )
}
export default TypeDropDownMenu