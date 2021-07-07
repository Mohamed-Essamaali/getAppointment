import React ,{useContext} from "react"
import { GlobalContext } from "../context/globalContext"

const DisplayData = ()=>{

    const slots = useContext(GlobalContext).slots
    console.log('slots in confirmation',slots)
    return(
        <div>
            {slots.map(slot=>{
                return (
                    <div>
                        <h3>Name: {slot.user.name}</h3>
                        <p>Email: {slot.user.email}</p>
                        <p>Time: {slot.time}:00</p>
                    </div>
                )
            })}
        </div>
    )
}
export default DisplayData