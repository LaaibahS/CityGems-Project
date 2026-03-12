import { GoogleMap, LoadScript, Marker, Autocomplete} from '@react-google-maps/api'
import { useState,useRef } from 'react'

const mapContainerStyle ={
    height: "900px",
    width: "500px"
}

//geometry values for city uni
const centre = {
    lat: 51.5280,
    lng: -0.1024
}

function PlacesAPI (){

    const [markerPos, setMarkerPos] = useState(null);
    const autocompleteRef = useRef(null)

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY2

    return(
         <div>
            <LoadScript
                googleMapsApiKey= {apiKey}
                library = {["places"]}>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center = {centre}
                    zoom = {15}>
                    <Marker
                        position={centre}/>
                </GoogleMap>
            </LoadScript>
        </div>
    )
}
export default PlacesAPI