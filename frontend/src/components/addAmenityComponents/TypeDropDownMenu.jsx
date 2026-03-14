function TypeDropDownMenu({setAddAmenityForm}){

    const convertTypeToId = (type) => {
        if(type === "Food"){
            return 1;
        }
        else if(type === "Study"){
            return 2;
        }
        else if(type === "Activity"){
            return 3;
        }
    }

    const handleSelect = (e) => {
        console.log("entered handleSelect")
        const typeId = convertTypeToId(e.target.value)
        setAddAmenityForm(prev => ({
            ...prev,
            amenityTypeId: typeId
        }))
    }

    return(
        <div>
           
                <label for="amenityType">Amenity Type: </label>
                {/* <h3>Amenity Type:</h3> */}
                <input onChange= {handleSelect} list="types" id="amenityType" name="amenityType"/>
                    <datalist id="types">
                            <option value="Food"></option>
                            <option value="Study"></option>
                            <option value="Activity"></option>
                    </datalist>
            
        </div>
    )
}
export default TypeDropDownMenu