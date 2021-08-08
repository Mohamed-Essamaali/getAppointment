import React,{useContext,useState,useEffect} from 'react'
import { GlobalContext } from '../context/globalContext'
import axios from 'axios'

const Dashboard = ()=>{
    const {activeUser,role} = useContext(GlobalContext)
    const[user,setUser] = useState('blablablabla')
    const[appts,setAppts] = useState([])

    console.log('IN DASHBOARD INFO active user: ',activeUser, 'current user name',user, 'appts ',appts )
    useEffect(()=>{

        //get name of the current user logged in
        axios.get(`https://getappointment.herokuapp.com/users/${activeUser}`)
        .then(res=>{console.log('res active user ',setUser(res.data.username))})
        .catch(err=>console.log(err))
        
        // get appts based on user logged in
        axios.get(`https://getappointment.herokuapp.com/appts/${activeUser}/${role}`)
        .then(res=>{console.log('res appts',res);})
        .catch(err=>{console.log(err)})

    },[])

    return(
        <div>
            <h1>Welcome {user}</h1>

            {
                appts.length < 0?
                <h2>No Appointments had scheduled yet</h2>

            :
            appts.map(appt=>{
                 return(
                            <div>
                                <h2>{appt.name}</h2>
                                <p>{appt.email}</p>
                                <p>Month: {appt.month}</p>
                                <p>Day: {appt.day}</p>
                                <p>Time: {appt.time} - {parseInt(appt.time)+1}</p> 
                            </div>)
            })}

        </div>
    )
}
export default Dashboard