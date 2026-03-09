import AmenityList from "../components/homePageComponents/AmenityList"; 
import EmbedMapsAPI from "../components/homePageComponents/EmbedMapsApi";
import { useState, useEffect } from "react";

function HomePage(){
    const [amenities, setAmenities] = useState([])
    
      useEffect(() => {
        //everything the website needs to store
        fetchAmenities()
      }, [])

    const fetchAmenities = async () => {
    const response = await fetch("http://127.0.0.1:5000/amenities")
    const data = await response.json()
    setAmenities(data.amenities)
    console.log(data.amenities)
  }

    return(
        <div>
            {/* <AmenityList amenities = {amenities}/> */}
            <EmbedMapsAPI/>
        </div>
        
    )
}
export default HomePage