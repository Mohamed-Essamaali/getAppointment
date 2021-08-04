import React from "react"
import  {Card} from 'reactstrap';
import { useHistory } from "react-router-dom";

const HomePage= ()=>{

    const {push} = useHistory()

    return(
        <div className='container home-container'>
            <Card>
            <h1>Welcome to our Scheduling System</h1>
            <img id='homePageImg' src='https://images.unsplash.com/photo-1501862700950-18382cd41497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80'/>

            </Card>
            <button className='start' onClick = {()=>push('/calendar')}>Start</button>
            <h3>About us</h3>
            <p>We are here to serve your needs</p>

            <footer>
                <h3>Contact us</h3>
                <p>Address: 176 knapp ave Clifon NJ</p> 
                <p>Phone: 201-234-1112</p>
            </footer>
          
           


        </div>
    )
}
export default HomePage