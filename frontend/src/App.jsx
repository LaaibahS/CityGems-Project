import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import SignupPage from './pages/signupPage'
import AddAmenityPage from './pages/AddAmenityPage'
import AddReviewPage from './pages/AddReviewPage'

function App() {
  const [amenity_types, setAmenityTypes] = useState([])


  useEffect(() => {
    //everything the website needs to store
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
      <Router>
        <Routes>
          <Route path = "/" element = {<LoginPage/>} />
          <Route path = "/signup" element = {<SignupPage/>} />
          <Route path = "/home" element = {<HomePage/>} />
          <Route path = "/addAmenity" element = {<AddAmenityPage/>}/>
          <Route path = "/AddReview" element = {<AddReviewPage/>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
