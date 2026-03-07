import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

//INSTEAD OF NAVIGATING TO THE SIGNUP PAGE IT SHOULD NAVIGATE TO LOGIN PAGE

const SignupForm = ({}) => {
    const [studentEmail, setStudentEmail] = useState("")
    const [studentPassword, setStudentPassword] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault() //don't reload the page when the form is submitted

        const data = {
            studentEmail,
            studentPassword
        }

        const url = "http://127.0.0.1:5000/signup"
        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)

        if(response.status !== 201 && response.status !== 200){
            const error = await response.json()
            alert(error.message)
        }
    }

    return(      
        <div className="app">
          <h1 className= "homePageTitle">WELCOME TO CITY GEMS!</h1>
        
        <form onSubmit = {handleSubmit}>
            <div>
                <label htmlFor = "studentEmail">Student email: </label>
                <input type= "email" id= "studentEmail" value = {studentEmail} onChange={(e) => setStudentEmail(e.target.value)}></input>
                <br/>
                <label htmlFor = "studentPassword">Student Password: </label>
                <input type = "password" id = "studentPassword" value = {studentPassword} onChange={(e) => setStudentPassword(e.target.value)}></input>
                
            </div>
            <br/>
            <Link to= '/'>
                <button type= "submit">Sign up</button>
            </Link>
            
        </form>
        </div>

    )
}
export default SignupForm
