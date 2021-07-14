import React  from "react"
import { useHistory } from "react-router-dom"
import Register from "./user/register"

const Navs = ()=>{
    const {push} = useHistory()
    return(
        <div>
            <button onClick={()=>{push('/') }}>Home</button>
            <button onClick={()=>{push('/login') }}>Login </button>
            <button onClick={()=>{push('/register') }}>Register </button>
        </div>
    )
}

export default Navs