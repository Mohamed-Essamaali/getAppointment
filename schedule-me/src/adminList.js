import axios from "axios"
import React,{useEffect,useState,useContext} from "react"
import { GlobalContext } from "./context/globalContext"

const AdminList = ()=>{

    const {events,setEvents}= useContext(GlobalContext)
    console.log('slots in admin',events)

    useEffect(()=>{
        axios
        .get('http://localhost:5000/appts')
        .then(appts=>{
            setEvents(appts.data)
            console.log('data in admin',appts.data)
        })
        .catch(err=>{console.log(err)})

    },[])
    return (<div>
        <h1>Admin </h1>
        <div className='admin-container'>
            
            {events.map(appt=>{
                return(<div key = {appt.time} className='admin-list'>
                    <h2>{appt.name}</h2>
                    <p>{appt.email}</p>
                    <p>Month: {appt.month}</p>
                    <p>Day: {appt.day}</p>
                    <p>Time: {appt.time} - {parseInt(appt.time)+1}</p>
                    </div>)
            })}

        </div>
        </div>
    )
}

export default AdminList