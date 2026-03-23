import { Link } from "react-router-dom"

function BackButton(){
    return(
        <div>
            <Link to= "/home">
                <button>Back to Home</button>
            </Link>
        </div>
    )
}
export default BackButton