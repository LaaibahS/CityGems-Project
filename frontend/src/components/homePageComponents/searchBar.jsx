import SearchResultList from "./SearchResultList"
import {FaSearch} from "react-icons/fa"
import { useState } from "react"

function SearchBar({ setAmenities}){

    const [searchInput, setSearchInput] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async (value) => {
        setSearchInput(value)
        const response = await fetch(`http://127.0.0.1:5000/amenities/${value}`)
        const data = await response.json()
        console.log("searched amenity:", data)
        setSearchResults(data)
    }

    return(
        <div>
            <div className = "homeSearchBar">
                <FaSearch className="searchIcon"/>
                <input className= "input" placeholder="Search for amenity..." value = {searchInput} onChange= {(e) => handleSearch(e.target.value)}>
                </input>
            </div>
            <div>
                <SearchResultList searchResults={searchResults} setAmenities={setAmenities} searchInput = {searchInput}/>
            </div>
        </div>
    )
}
export default SearchBar