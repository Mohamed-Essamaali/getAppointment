import './App.css';
import Calendar from './components/calendar'
import {Route,} from 'react-router-dom'
import Slot from './components/oneSlot'
import SlotsList from './components/daySlots'
import Navs from './components/Navs'
import Confirmation from './components/confirmation';
import AdminList from './adminList';
import HomePage from './components/homePage';
import Register from './components/user/register'
  


function App() {
  return (
    <div exact className="App">
      <Navs/>
      
      <Route path='/register'>
        <Register/>
      </Route>
      
      {/* protected route ----protected route below -------*/}
    
    <Route exact path='/admin'>
      <AdminList/>
    </Route>
   {/* protected route ---- above -------*/}
   
   <Route exact path='/'>
      <HomePage/>
    </Route>

    <Route exact path='/calendar'>
      <Calendar/>
    </Route>
   
    
    <Route exact path='/form/:slotId'>
      <Slot/>
    </Route>
    <Route exact path='/appts/:month/:day'>
      <SlotsList/>
    </Route>
    <Route exact path='/confirmation'>
      <Confirmation/>
    </Route>
    
    </div>
  );
}

export default App;
