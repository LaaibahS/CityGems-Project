import {FaSearch} from "react-icons/fa"

function SearchBar(){
    return(
        <div className = "homeSearchBar">
            <FaSearch className="searchIcon"/>
            <input className= "input" placeholder="Search for amenity...">
            </input>
        </div>
    )
}
export default SearchBar