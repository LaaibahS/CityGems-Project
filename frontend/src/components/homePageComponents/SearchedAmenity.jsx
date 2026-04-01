function SearchedAmenity({id, SearchResults, setAmenities}){

    const handleClick = async () => {
        const response = await fetch(`http://127.0.0.1:5000/amenities/${id}`)
        const data = await response.json()
        console.log("the id is: ", id)
        console.log("clickedAmenity: ", data)
        setAmenities(data.amenities)
    }
       
    return(
        <div key= {id} className = "searchedAmenities" onClick = {handleClick}>
            {SearchResults.name}
        </div>
    )
}
export default SearchedAmenity