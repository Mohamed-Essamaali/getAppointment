import React,{useContext, useState} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import { GlobalContext } from '../context/globalContext'

const Slot = props=>{

    const[user,setUser]=useState(
        {
        name:'',
        email:'',
        // time:'',
        // date:new Date().toDateString(),
        
    }
    )
    const handleChange = e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    let {slots,setSlots} = useContext(GlobalContext)
    const params = useParams()
    const {push} = useHistory()
   
    // console.log('time slot selected ',params.slotId)

    const addSlot = user=>{
        setSlots([...slots,{user,time:params.slotId}])
        console.log('user',user)
        console.log('slots', slots)
        
    }
    
        
    return (
        <div>
        <form onSubmit = {(e)=>{
                        e.preventDefault();
                        addSlot(user); 
                        setUser({...user,available:false});
                        // push('/confirmation')
                    }
                }>
                <label>Name  </label>
                <input name='name' value={user.name} onChange= {handleChange} placeholder='enter Your Name' />
                <label>Email  </label>
                <input name='email' value={user.email} onChange= {handleChange} placeholder='enter Your email' />
                {/* <label>Time  </label>
                <input type='time' name='time' value={user.time} onChange= {handleChange} />
                <label>Date  </label>
                <input type='date' name='date' value={user.date} onChange= {handleChange} /> */}
                <button>Submit!</button>
            </form>

        </div>
    )
}

export default Slot