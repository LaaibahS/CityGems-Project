import AmenityList from "../components/homePageComponents/AmenityList"; 
import EmbedMapsAPI from "../components/homePageComponents/EmbedMapsApi";
import SearchBar from "../components/homePageComponents/searchBar";
import FilterButtons from "../components/homePageComponents/FilterButtons";
import AddAmenityButton from "../components/homePageComponents/addAmenityButton";
import '../styles/homePage.css'
import { useState, useEffect } from "react";


function HomePage(){

    const defaultDestinationPlaceId = import.meta.env.VITE_MAP_DEFAULT_DESTINATION_PLACE_ID
    const [amenities, setAmenities] = useState([])
    const [amenityPlaceId, setAmenityPlaceId] = useState(defaultDestinationPlaceId)
 
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
                <div className ="filterButtons">
                    <FilterButtons setAmenities = {setAmenities}/>
                </div>

                <br/>
                <div className= "addAmenityHome">
                    <AddAmenityButton/>
                </div>
                <br/>
                <div className="homeAmenityListContainer">
                    <div>
                        <AmenityList amenities = {amenities} setAmenityPlaceId = {setAmenityPlaceId}/>
                    </div>
                </div>

            </div>
            <div className="homeRight">
                <div className= "homeMap" >
                    <EmbedMapsAPI amenityPlaceId={amenityPlaceId}/>
                </div>
            </div>
        </div>
        
    )
}
export default HomePage