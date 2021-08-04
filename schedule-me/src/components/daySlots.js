import React,{useState,useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { GlobalContext } from '../context/globalContext'

const SlotsList = props=>{
    let {task,setTask} = useContext(GlobalContext)
    // let[filterSlot,setFilterSlot] = useState({})
    
    let [appts,setAppts] = useState([])
    let temp = []
    let d = {}


    const {push}=useHistory()

    for(let i = 8;i<=19;i++){
        // slotGen.push({time:i,available:true,month:task.month})
        d[i]=true
    }

    useEffect(()=>{
       
            axios.get(`https://getappointment.herokuapp.com/appts/${task.month}/${task.day}`)
            .then(res=>{console.log('res data',res);setAppts(...appts,res.data)})
            .catch(err=>console.log(err))

           
    
    },[])
    const getAppt = ()=>{
        if(appts.length>0){
            for(let i = 0; i<appts.length;i++){
                let tempAppt =parseInt(appts[i].time)
                console.log('tempAppt',tempAppt)
               
                d[tempAppt]=false
                console.log('d',d[tempAppt])
            }
        }
        for(let[key,value] of Object.entries(d)){
            console.log('key',key, ' value ',value)
            
            temp.push([parseInt(key),value])
        }
    }
   

     getAppt()
    console.log('appts',appts)
    console.log('temp',temp)
   
    

    
    // for(let i = 0;i<=slotGen.length;i++){
    //     for(let j = 0;j<appts;j++){
    //         if(slotGen[i].time!=appts[j].time){
    //             temp.append(slotGen[i])
    //         }
    //     }
    // }

  
    
    return(
        <div className='container'>
            <h1>Select your time slot for date {`${task.month}/${task.day}`} </h1>
        
            <div className='slots-container'>
            
            
                {temp.map(slot=>{
                        if(slot[1]){
                            return <div key = {slot[0]} className={`available`} 
        
                            onClick={()=>{setTask({...task,available:false,time:slot[0]});
                            push(`/form/${slot[0]}`)}} > 
                            {slot[0]}:00 -- {slot[0]+1}:00
                            </div>
                        }else{
                            return <div key = {slot[0]} className={`unavailable`}  > 
                            {slot[0]}:00 -- {slot[0]+1}:00
                            </div>
                        }
                        
                        
                    })}
            </div>
            <button onClick={()=>push('/calendar')}>Return to Calendar view </button>
        </div>
    )
}

export default SlotsList


