import {useState, ustState} from "react"

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
        <button type= "submit" value = "submit" ></button>
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