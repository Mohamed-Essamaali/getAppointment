import React, {  createContext, useState } from 'react'

export const GlobalContext = createContext()

const ContextProvider = ({children})=>{
    const[slots,setSlots] = useState([])
    const[events,setEvents] = useState([])
   
    const initialTask = {
        name:'',
        day: new Date().getDate(),
        month: new Date().getMonth()+1,
        email:'',
        completed:false
    }
    const[task,setTask] = useState(initialTask)
    return (
        <GlobalContext.Provider value={{slots,setSlots,task,setTask,events,setEvents}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default ContextProvider