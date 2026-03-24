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
           
                <label htmlfor="amenityType">Amenity Type: </label>
                {/* <h3>Amenity Type:</h3> */}
                <input onChange= {handleSelect} list="types" id="amenityType" name="amenityType"/>
                {/* <select id= "amenityType" name= "amenityType" onChange={handleSelect}> */}
                    <datalist id="types">
                            <option value="Food">Food</option>
                            <option value="Study">Study</option>
                            <option value="Activity">Activity</option>
                    </datalist>
                {/* </select> */}
            
        </div>
    )
}
export default TypeDropDownMenu