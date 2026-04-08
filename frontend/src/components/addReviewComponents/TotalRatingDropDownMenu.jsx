function TotalRatingDropDownMenu({setAddReviewForm}){

    const handleSelect = (e) => {
        console.log("entered add review drop down method")
        setAddReviewForm(prev => ({
            ...prev,
            overallRating: e.target.value
        }))
        console.log("added rating")
    }

    return(
        <div className="ratingWindow">
            <label htmlFor="rating"> Rate this amenity on a scale of 1-5:</label>
            <p>Note: 1 is the lowest rating and 5 is the highest</p>
            <select className = "ratingOptions" id= "rating" name= "rating" onChange={handleSelect}>
                    <option value= "">Select Rating</option>
                    <option value= "1">1</option>
                    <option value= "2">2</option>
                    <option value= "3">3</option>
                    <option value= "4">4</option>
                    <option value= "5">5</option>
            </select>
            </div>
    )
}
export default TotalRatingDropDownMenu
