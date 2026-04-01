import AmenityList from "../components/homePageComponents/AmenityList"; 
import EmbedMapsAPI from "../components/homePageComponents/EmbedMapsApi";
import SearchBar from "../components/homePageComponents/searchBar";
import FilterButtons from "../components/homePageComponents/FilterButtons";
import AddAmenityButton from "../components/homePageComponents/addAmenityButton";
import SearchResultList from "../components/homePageComponents/SearchResultList";
import '../styles/homePage.css'
import { useState, useEffect } from "react";


function HomePage(){
    const [amenities, setAmenities] = useState([])
    // const [searchResults, setSearchResults] = useState([])
 
      useEffect(() => {
        fetchAmenities()
      }, [])

    const fetchAmenities = async () => {
    const response = await fetch("http://127.0.0.1:5000/amenities")
    const data = await response.json()
    setAmenities(data.amenities)
    console.log(data.amenities)
  }

    return(
        <div className="homepage">
            <div className= "homeLeft">
                <div>
                    <SearchBar setAmenities = {setAmenities}/>
                </div>
                {/* <div>
                    <SearchResultList searchResults = {searchResults} setAmenities = {setAmenities}/>
                </div> */}
                <div className ="filterButtons">
                    <FilterButtons setAmenities = {setAmenities}/>
                </div>

                <div className="homeAmenityListContainer">
                    <AmenityList amenities = {amenities}/>
                </div>
                
                <div className= "addAmenityHome">
                    <AddAmenityButton/>
                </div>
            </div>
            <div className="homeRight">
                <div className= "homeMap" >
                    <EmbedMapsAPI/>
                </div>
            </div>
        </div>
        
    )
}
export default HomePage