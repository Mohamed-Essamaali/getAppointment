import React, {  createContext, useState } from 'react'

export const GlobalContext = createContext()

const ContextProvider = ({children})=>{
    const[loggedIn,setLoggedIn] = useState(localStorage.getItem('token')? true:false)
    const[slots,setSlots] = useState([])
    const[events,setEvents] = useState([])
    const[activeUser,setActiveUser] = useState()
    const[role,setRole] = useState()
   
    const initialTask = {
        name:'',
        day: new Date().getDate(),
        month: new Date().getMonth()+1,
        email:'',
        completed:false
    }
    const[task,setTask] = useState(initialTask)
    return (
        <GlobalContext.Provider value={{slots,setSlots,task,setTask,events,setEvents,activeUser,setActiveUser,loggedIn,setLoggedIn,role,setRole}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default ContextProvider