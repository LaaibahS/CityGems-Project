function EmbedMapsAPI(){ //need to add props here so that the amenity place ids can be passed as destination place id

  //code taken from official google maps embed API website:
  //https://developers.google.com/maps/documentation/embed/embedding-map?_gl=1*3wlay7*_up*MQ..*_ga*NjM3NTA4NjQuMTc3MzA2NjY3MA..*_ga_NRWSTWS78N*czE3NzMwNjY2NzAkbzEkZzAkdDE3NzMwNjY2NzAkajYwJGwwJGgw*_ga_SM8HXJ53K2*czE3NzMwNjY2NzAkbzEkZzAkdDE3NzMwNjY2NzAkajYwJGwwJGgw#directions_mode
  //slight changes/additions have been made to account for my needs e.g. setting origin to specific university as stated
  //in the project definition document (PDD)
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const originPlaceId = import.meta.env.VITE_MAP_ORIGIN_PLACE_ID
  return (
    <div>
      <iframe
        width="750"
        height="730"
        style={{border:0}}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=place_id:${originPlaceId}&destination=place_id:ChIJdZDu2VobdkgRpYFNHN_eQXg`}
        allowFullScreen>
      </iframe>
    </div>
  );
};

export default EmbedMapsAPI