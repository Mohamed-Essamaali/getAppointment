import React ,{useEffect,useContext} from "react"
import { GlobalContext } from "../context/globalContext"
import axios from 'axios'


const Confirmation = ()=>{

   

    const {activeUser, events,setEvents} = useContext(GlobalContext)
    console.log('slots in confirmation',events)
    console.log('Active User in confirmation',activeUser)
   
    // useEffect(()=>{
    //     axios.get(`https://get-appointment.vercel.app/appts/${activeUser}`)
    //     .then(res=>{setSlots(res.data);console.log('res data in cnfirmation',res.data)})
    //     .catch(err=>console.log(err))
    // },[])
    return (<div>

    </div>)
}
                // {events.map(appt=>{
                //     return(
                //         <div>
                //             <h2>{appt.name}</h2>
                //             <p>{appt.email}</p>
                //             <p>Month: {appt.month}</p>
                //             <p>Day: {appt.day}</p>
                //             <p>Time: {appt.time} - {parseInt(appt.time)+1}</p> 
                //         </div>)
                // })
                // }
    
             

export default Confirmation