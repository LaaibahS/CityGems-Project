import SearchedAmenity from "./SearchedAmenity"

function SearchResultList({searchResults, setAmenities, searchInput}) {

    if (searchInput.length === 0) {
        return null
    }

    if (searchResults.length === 0 ) {
        return <div>No amenity found</div>
    }

    return(
        <div className = "searchResultsList">
            {searchResults.map((SearchResults) => (
                <div>
                    <SearchedAmenity id = {SearchResults.id} SearchResults = {SearchResults}  setAmenities = {setAmenities}/>
                </div>
            ))}
        </div>
    )

}
export default SearchResultList