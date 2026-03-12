import { GoogleMap, LoadScript, Marker, Autocomplete, useJsApiLoader } from '@react-google-maps/api'

function PlacesAPI (){

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    const originPlaceId = import.meta.env.VITE_MAP_ORIGIN_PLACE_ID

    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: apiKey
    // })
    //  console.log(isLoaded)

    return(
         <div>
            {/* <iframe
                width="750"
                height="730"
                style={{border:0}}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=place_id:${originPlaceId}&destination=place_id:ChIJdZDu2VobdkgRpYFNHN_eQXg`}
                allowFullScreen>
            </iframe> */}
            <LoadScript/>
            <GoogleMap></GoogleMap>
        </div>
    )
}
export default PlacesAPI