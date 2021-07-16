import axios from 'axios'
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

const Login = ()=>{
    const{push} = useHistory()

    const[user,setUser] = useState({username:'',email:'',password:''})
    const handleChanges = e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const validateUser = user=>{
        axios
        .post('http://localhost:5000/auth/login',user)
        .then(res=>{console.log('res register ',res.data); push('/calendar')})
        .catch(err=>{console.log(err)})
    }

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