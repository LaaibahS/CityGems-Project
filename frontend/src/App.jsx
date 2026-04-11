import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import SignupPage from './pages/signupPage'
import AddAmenityPage from './pages/AddAmenityPage'
import AddReviewPage from './pages/AddReviewPage'

function App() {
 
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
