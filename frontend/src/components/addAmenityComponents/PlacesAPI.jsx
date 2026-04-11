import { GoogleMap, useJsApiLoader, Marker, Autocomplete} from '@react-google-maps/api'
import { useState, useRef } from 'react'
import {FaSearch} from "react-icons/fa"

// https://www.youtube.com/watch?v=ixPpl-M9SRU
//this component was used using a youtube tutorial to add a map and marker to the addAmenityPage

// https://developers.google.com/maps/documentation/javascript/legacy/place-autocomplete?utm_source=chatgpt.com
// this google documentation was used to add the autocomplete search bar, the boundaries and binding them to the map

// https://www.youtube.com/watch?v=sWVgMcz8Q44
//styling of the searchbar is the same as the styling of searchbar component in homepage and therefore uses same tutorial

// https://www.youtube.com/watch?v=iP3DnhCUIsE
//first 10mins of this tutorial was also used. intitially used LoadScript, but that loaded autocomplete before the map which 
// caused an error so jsApiLoader was used instead, to load the map first

const mapContainerStyle = {
    height: "650px",
    width: "700px"
}

//geometry values for city uni
const uniCentre = {
    lat: 51.5280,
    lng: -0.1024
}

const londonBounds = {
  north: 51.6860,
  south: 51.3849,
  west: -0.3515,
  east: 0.1483
}

function PlacesAPI ({setAddAmenityForm}){

    const [markerPos, setmarkerPos] = useState(null)
    const [centre, setCentre] = useState(uniCentre)
    const autocompleteRef = useRef(null)
    const mapRef = useRef(null)

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY2

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey,
        libraries: ["places"]
    })

    if (!isLoaded) {
        return (
            <div>Loading Map...</div>
        )
    }

    const mapAutocomplete = (autocomplete) => {
    autocompleteRef.current = autocomplete
    autocomplete.setBounds(londonBounds)

    if (mapRef.current) {
        autocomplete.bindTo("bounds", mapRef.current)
    }
}

    const handlePlaceChanged = () => {

        const place = autocompleteRef.current.getPlace();

        console.log(place)

        if (!place.geometry) return;

        const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        };

        setmarkerPos(location)
        setCentre(location)

        setAddAmenityForm(prev => ({
        ...prev,
        amenityName: place.name,
        amenityAddress: place.formatted_address,
        amenityPlaceId: place.place_id
        }))
  };

    return(
         <div>
            <Autocomplete 
            onLoad={mapAutocomplete} 
            onPlaceChanged={handlePlaceChanged }
            options= {{componentRestrictions: {country: "gb"}, types: ["establishment"], fields:["name","formatted_address","place_id","geometry"]}}>
                <div className="AmenityMapSearch">
                    <FaSearch className = "mapSearchIcon"/>
                    <input className = "amenityInput" id= "mapSearchBox" placeholder='Search for an amenity here...' type= "text"></input>
                </div>
            </Autocomplete>
            <br/>
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center = {centre}
            zoom = {16}
            onLoad={(map) => mapRef.current = map}>
                {markerPos && <Marker position={markerPos}/> }
            </GoogleMap>
        </div>
    )
}
export default PlacesAPI