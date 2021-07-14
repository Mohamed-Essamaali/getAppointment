import './App.css';
import Calendar from './components/calendar'
import {Route,} from 'react-router-dom'
import Slot from './components/oneSlot'
import SlotsList from './components/daySlots'
import Navs from './components/Navs'
import DisplayData from './components/confirmation';
import AdminList from './adminList';
  


function App() {
  return (
    <div className="App">
      
      {/* protected route ----protected route below -------*/}
    {/* <Navs/> */}
    <Route exact path='/admin'>
      <AdminList/>
    </Route>
   {/* protected route ---- above -------*/}

    <Route exact path='/'>
      <Calendar/>
    </Route>
    
    <Route exact path='/form/:slotId'>
      <Slot/>
    </Route>
    <Route exact path='/appts/:month/:day'>
      <SlotsList/>
    </Route>
    <Route exact path='/confirmation'>
      <DisplayData/>
    </Route>
    
    </div>
  );
}

export default App;
