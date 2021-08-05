import React,{useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../context/globalContext'
import  { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

const Slot = props=>{
    let {events,setEvents,task,setTask,activerUser} = useContext(GlobalContext)
    console.log('task input ',task)
    console.log('events',events)
    const handleChange = e=>{
        setTask({...task,[e.target.name]:e.target.value,user_id:activerUser})
    }
    
 
    const {push} = useHistory()
   
    // console.log('time slot selected ',params.slotId)

    const addEvent = task=>{
        axios.post(`https://getappointment.herokuapp.com/appts/${activerUser}`,task)
        .then(appt=>{
            
            setEvents([...events,appt.data]); 
            console.log('data',appt.data.completed)})
        .catch(err=>console.log('my error is ',err))
        
        
    }
    
        
    return (
        <div className='form-container container'>
            <h1>Please Enter the following Information to complete your appointment</h1>
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