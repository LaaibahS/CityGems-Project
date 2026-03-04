import { useState, useEffect } from 'react'
import Searchbar from './searchBar'
import Loginform from './loginComponents/loginForm'
import './App.css'

function App() {
  const [amenity_types, setAmenityTypes] = useState([])

  useEffect(() => {
    //wanna fetch the amenity types first since frontend needs to know them
    fetchAmenityTypes()
  }, [])

  const fetchAmenityTypes = async () => {
    const response = await fetch("http://127.0.0.1:5000/amenity_types")
    const data = await response.json()
    setAmenityTypes(data.amenity_types)
    console.log(data.amenity_types)
  }

  return (
    <>

     {/* <Searchbar/> */}

    <div className="app">
        <h1 className= "homePageTitle">WELCOME TO CITY GEMS!</h1>
      </div>
      <Loginform/>




     {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> -- HPPRHUIWLFBWEJ
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
