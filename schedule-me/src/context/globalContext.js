import React, {  createContext, useState } from 'react'

export const GlobalContext = createContext()

const ContextProvider = ({children})=>{
    const[slots,setSlots] = useState([])
    return (
        <GlobalContext.Provider value={{slots,setSlots}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default ContextProvider