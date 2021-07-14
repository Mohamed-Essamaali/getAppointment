import React  from "react"
import { useHistory } from "react-router-dom"
import Register from "./user/register"

const Navs = ()=>{
    const {push} = useHistory()
    return(
        <div>
            <button>Home</button>
            <button>Login </button>
            <button onClick={()=>{push('/register') }
            }
            >Register </button>
        </div>
    )
}

export default Navs