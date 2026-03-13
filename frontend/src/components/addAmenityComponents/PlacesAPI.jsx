import { GoogleMap, useJsApiLoader, Marker, Autocomplete} from '@react-google-maps/api'
import { useState, useRef } from 'react'

const mapContainerStyle ={
    height: "900px",
    width: "500px"
}

//geometry values for city uni
const uniCentre = {
    lat: 51.5280,
    lng: -0.1024
}

function PlacesAPI (){

    const [markerPos, setmarkerPos] = useState(null)
    const [centre, setCentre] = useState(uniCentre)
    const autocompleteRef = useRef(null)

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

    const handlePlaceChanged = () => {

        const place = autocompleteRef.current.getPlace();

        if (!place.geometry) return;

        const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        };

        setmarkerPos(location)
        setCentre(location)
  };

    return(
         <div>
            <Autocomplete 
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)} 
            onPlaceChanged={handlePlaceChanged }
            options= {{componentRestrictions: {country: "gb"}, types: "establishment"}}>

                <input id= "mapSearchBox" placeholder='search for a place' type= "text"></input>

            </Autocomplete>
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center = {centre}
            zoom = {15}>
                {markerPos && <Marker position={markerPos}/> }
            </GoogleMap>
        </div>
    )
}
export default PlacesAPI