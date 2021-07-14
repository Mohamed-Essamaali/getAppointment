import React,{useContext, useState} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import { GlobalContext } from '../context/globalContext'
import  { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'

const Slot = props=>{
    let {events,setEvents,task,setTask} = useContext(GlobalContext)
    console.log('task input ',task)
    console.log('events',events)
    const handleChange = e=>{
        setTask({...task,[e.target.name]:e.target.value})
    }
    
    const params = useParams()
    const {push} = useHistory()
   
    // console.log('time slot selected ',params.slotId)

    const addEvent = task=>{
        axios.post('http://localhost:5000/appts',task)
        .then(appt=>{
            
            setEvents([...events,appt.data]); 
            console.log('data',appt.data.completed)})
        .catch(err=>console.log('my error is ',err))
        
        
    }
    
        
    return (
        <div className='form-container'>
            <h1>Please Enter the following Information</h1>
        <Form>
                <FormGroup>
                    <Label htmlFor='name'> Name  </Label>
                    <Input name='name' value={task.name} onChange= {handleChange} placeholder='enter Your Name' />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor='email'>Email  </Label>
                    <Input name='email' value={task.email} onChange= {handleChange} placeholder='enter Your email' />
                </FormGroup>

                <FormGroup>
                    <Button onClick={(e)=>{
                        e.preventDefault();
                        addEvent(task); 
                      
                        // push('/confirmation')
                    }}>Submit!</Button>
                    <Button onClick={()=>{push(`/appts/${task.month}/${task.day}`)}}>Cancel</Button>
                </FormGroup>
            </Form>

        </div>
    )
}

export default Slot