import {useState} from 'react'
import {Link} from 'react-router-dom'


const SignupForm = ({}) => {
    const [studentEmail, setStudentEmail] = useState("")
    const [studentUsername, setStudentUsername] = useState("")
    const [studentPassword, setStudentPassword] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault() //don't reload the page when the form is submitted

        const data = {
            studentEmail,
            studentUsername,
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
        else{
            alert("student login created! Welcome to City Gems!")
        }
    }

    return(      
        <div className="signUpWindow">
          <h1 className= "SignupPageTitle">THANKS FOR JOINING CITY GEMS!</h1>
        
        <form onSubmit = {handleSubmit}>
            <div>
                <label htmlFor = "studentEmail">Student email: </label>
                <input type= "email" id= "studentEmail" value = {studentEmail} onChange={(e) => setStudentEmail(e.target.value)} required></input>
                <br/>
                <label htmlFor = "studentUsername">Student IT login: </label>
                <input type = "text" id= "studentUsername" value = {studentUsername} onChange={(e) => setStudentUsername(e.target.value)} required></input>
                <br/>
                <label htmlFor = "studentPassword">Student Password: </label>
                <input type = "password" id = "studentPassword" value = {studentPassword} onChange={(e) => setStudentPassword(e.target.value)} required></input>
                
            </div>
            <br/>
            <div>
                <button type= "submit">Sign up</button>
            </div>
            <br/>
            <Link to= '/'>
                <button type= "submit">Back to login</button>
            </Link>
        </form>
        </div>

    )
}
export default SignupForm
