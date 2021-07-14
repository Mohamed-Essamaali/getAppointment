import React ,{useContext} from "react"
import { GlobalContext } from "../context/globalContext"

const Confirmation = ()=>{

   

    const slots = useContext(GlobalContext).slots
    console.log('slots in confirmation',slots)
    return(<div >
                    {/* <h2>{appt.name}</h2>
                    <p>{appt.email}</p>
                    <p>Month: {appt.month}</p>
                    <p>Day: {appt.day}</p>
                    <p>Time: {appt.time} - {parseInt(appt.time)+1}</p> */}
                    </div>)
}
export default Confirmation