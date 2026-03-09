import {useState} from "react"
import {Link, useNavigate} from 'react-router-dom'

const LoginForm = ({}) => {
    const [studentEmail, setStudentEmail] = useState("")
    const [studentPassword, setStudentPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log("entering submit function")
        e.preventDefault()

        const data = {
            studentEmail,
            studentPassword
        }

        const url = "http://127.0.0.1:5000/login"
        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)

        if(response.status !== 200){
            const error = await response.json()
            alert(error.message)
        }else{
            console.log("going to the homepage")
            navigate("/home")
        }

    }

    return(      
        <div className = "app">
          <h1 className= "LoginPageTitle">WELCOME TO CITY GEMS!</h1>
         
        <form onSubmit = {handleSubmit}>
            <div className = "loginInput">
                <label htmlFor = "studentEmail" >Student email:</label>
                <input type= "email" id= "studentEmail" value = {studentEmail} onChange={(e) => setStudentEmail(e.target.value)} required></input>
                <br/>
                <label htmlFor = "studentPassword">Student Password: </label>
                <input type = "password" id = "studentPassword" value = {studentPassword} onChange={(e) => setStudentPassword(e.target.value)} required></input>
                
            </div>
            <br/>
            <button type= "submit">Log in</button>
        </form>
        <br/>
        <br/>
        <div>
            <div className= "linkToSignUp">
                Don't have an account? Click here to sign up!
            </div>
            <Link to= "/signup">
                <button>Sign up</button>
            </Link>
        </div>
        </div>
    )
}
export default LoginForm
