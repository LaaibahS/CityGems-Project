function FilterButtons({setAmenities}){

    const handleFoodClick  = async () => {
        const response = await fetch("http://127.0.0.1:5000/amenity_types/1/amenities")
        const data = await response.json()
        setAmenities(data.amenities)
        console.log("the food data:", data)
        console.log("filtering food amenities")
    }

    const handleStudyClick  = async () => {
        const response = await fetch("http://127.0.0.1:5000/amenity_types/2/amenities")
        const data = await response.json()
        setAmenities(data.amenities)
        console.log("the study data:", data)
        console.log("filtering study amenities")
    }

    const handleActivityClick  = async () => {
        const response = await fetch("http://127.0.0.1:5000/amenity_types/3/amenities")
        const data = await response.json()
        setAmenities(data.amenities)
        console.log("the activity data:", data)
        console.log("filtering activity amenities")
    }
    
    return(
        <div className = "homeFilters">
             <div className="filterAmenity">Filter Amenities:</div>
            <div className= "foodButton">
                <button onClick = {handleFoodClick}>Food</button>
            </div>
            <div className= "studyButton">
                <button onClick = {handleStudyClick}>Study</button>
            </div>
            <div className = "activityButton">
                <button onClick = {handleActivityClick}>Activity</button>
            </div>
        </div>
    )
}
export default FilterButtons