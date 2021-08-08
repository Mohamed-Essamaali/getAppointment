import React,{useContext}  from "react"
import { useHistory } from "react-router-dom"
import {GlobalContext} from '../context/globalContext'

const Navs = ()=>{
    const {loggedIn,setLoggedIn} = useContext(GlobalContext)
    const {push} = useHistory()
    return(<div>
        {loggedIn
            ?
                <div>
                    <button onClick={()=>{push('/') }}>Home</button>
                    <button onClick={()=>{
                                        localStorage.removeItem('token');
                                        setLoggedIn(false);
                                        push('/login')
                                        }
                                     }
                         >Log Out </button>

                    <button onClick={()=>{push('/dashboard') }}>Dashboard </button>
                </div>
            :
                <div>
                    <button onClick={()=>{push('/') }}>Home</button>
                    <button onClick={()=>{push('/login') }}>Login </button>
                    <button onClick={()=>{push('/register') }}>Register </button>
                </div>
            }
            </div>
       
    )
}

export default Navs