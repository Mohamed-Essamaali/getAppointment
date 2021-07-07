import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import Slot from './oneSlot'

const SlotsList = props=>{
    const[slots,setSlots]=useState([])
    const {push}=useHistory()

    for(let i = 8;i<=19;i++){
        slots.push(i)
    }
    
    return(
        <div className='slots-container'>
         
            {slots.map(slot=>{
                console.log('slot in list',slot)
                return <div className='one-slot' onClick={()=>{push(`/form/${slot}`)}}> {slot}:00 -- {slot+1}:00</div>
            })}
        </div>
    )
}

export default SlotsList


