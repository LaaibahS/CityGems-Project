import {useState, ustState} from "react"
import {Link} from 'react-router-dom'

//THIS WILL BE SLIGHTLY DIFFERENT TO THE SIGNUP FORM BECAUSE WHEN YOU PRESS THE SUBMIT
//IT SHOULD NAVIGATE TO THE HOMEPAGE RATHER THAN CREATE A NEW STUDENT

const LoginForm = ({}) => {
    const [studentEmail, setStudentEmail] = useState("")
    const [studentPassword, setStudentPassword] = useState("")


    function handleSubmit(){
        //NEED TO PUT THE LOGIC FOR HANDLING SUBMISSION OF LOGIN FORM HERE
    }

    return(      
        <div className="app">
          <h1 className= "homePageTitle">WELCOME TO CITY GEMS!</h1>
        
        <form onSubmit = {handleSubmit}>
            <div>
                <label htmlFor = "studentEmail">Student email:</label>
                <input type= "email" id= "studentEmail"></input>
                <br/>
                <label htmlFor = "studentPassword">Student Password: </label>
                <input type = "password" id = "studentPassword"></input>
                
            </div>
        </form>
        <Link to= "/amenities">
            <button type= "submit">Log in</button>
        </Link>
        <br/>
        <br/>
        <div>
            Don't have an account? Click here to sign up!
            <br/>
            <Link to= "/signup">
                <button>Sign Up</button>
            </Link>
            
        </div>
        </div>

    )
}
export default LoginForm











//remembered that this is the html version of forms and not react version

// function LoginForm(){
//     return (
//         //where do i send the action again??
//         <form method = "post" action = "">
//             <label for = "studentEmail">Student email:</label>
//             <input type= "email" id= "studentEmail"></input>
//             <br/>
//             <label for = "studentPassword">Student Password: </label>
//             <input type = "password" id = "studentPassword"></input>
//         </form>
  
//     )
// }
// export default LoginForm