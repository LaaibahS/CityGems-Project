function AddAddress(){
    return(
        <div>
            <h3>Amenity Address:</h3>
            <h6>(Find a place on the map and then click on it!)</h6>
            <div> 
                {/*here, when you click anywhere on the map, it'll extract the place id for backend but will show the address on UI*/}
                <input placeholder= "click amenity on the map ->"></input>
            </div>
        </div>
    )
}
export default AddAddress