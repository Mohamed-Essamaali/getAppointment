import axios from 'axios'
import React,{useState,useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../../context/globalContext'
import jwt_decode from 'jwt-decode'

const Login = ()=>{

    const {setLoggedIn,loggedIn,activeUser,setActiveUser,role,setRole} = useContext(GlobalContext)

    const{push} = useHistory()

    const[user,setUser] = useState({username:'',password:''})
    const handleChanges = e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const validateUser = user=>{
        axios
        .post('https://getappointment.herokuapp.com/login',user)
        .then(res=>{localStorage.setItem('token',res.data.token);
        const decoded = jwt_decode(res.data.token);
        setActiveUser(decoded.userId);
        setRole(decoded.role)
        setLoggedIn(true);
        // console.log('logged in: ',loggedIn , ",  activeUser: ", activeUser)
        
         push('/dashboard')
        })
        .catch(err=>{console.log('login error ',err)})
    }
    console.log('logged in: ',loggedIn , ",  activeUser: ", activeUser)
    return(
        <div>
            <form>
                <label htmlFor='username'>User Name</label>
                <input name = 'username' value={user.username} onChange={handleChanges} placeholder='User Name' />
                <label htmlFor='password'>Password</label>
                <input name = 'password' value={user.password} onChange={handleChanges} placeholder='Password' />

                <button onClick={(e)=>{e.preventDefault();validateUser(user)}}>Log in</button>
            </form>
        </div>
    )
}

export default Login