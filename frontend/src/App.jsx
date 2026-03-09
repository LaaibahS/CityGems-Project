import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import SignupPage from './pages/signupPage'
import './App.css'

function App() {
  const [amenity_types, setAmenityTypes] = useState([])
  //const [amenities, setAmenities] = useState([])

  useEffect(() => {
    //everything the website needs to store
    fetchAmenityTypes()
    //fetchAmenities()
  }, [])

  const fetchAmenityTypes = async () => {
    const response = await fetch("http://127.0.0.1:5000/amenity_types")
    const data = await response.json()
    setAmenityTypes(data.amenity_types)
    console.log(data.amenity_types)
  }

  // const fetchAmenities = async () => {
  //   const response = await fetch("http://127.0.0.1:5000/amenities")
  //   const data = await response.json()
  //   setAmenities(data.amenities)
  //   console.log(data.amenities)
  // }

  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element = {<LoginPage/>} />
          <Route path = "/signup" element = {<SignupPage/>} />
          <Route path = "/home" element = {<HomePage/>} />
        </Routes>
      </Router>
      {/* <LoginPage/> */}
        

        




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
