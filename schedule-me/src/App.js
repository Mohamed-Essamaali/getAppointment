import './App.css';
import Calendar from './components/calendar'
import {Route,} from 'react-router-dom'
import Slot from './components/oneSlot'
import SlotsList from './components/daySlots'
import Navs from './components/Navs'
import DisplayData from './components/confirmation';
  


function App() {
  return (
    <div className="App">
    <Navs/>
    <h1>Welcome to scheduling Calendar </h1>
   
    <Route exact path='/'>
      <Calendar/>
    </Route>
    <Route exact path='/form/:slotId'>
      <Slot/>
    </Route>
    <Route exact path='/slots/:id'>
      <SlotsList/>
    </Route>
    <Route exact path='/confirmation'>
      <DisplayData/>
    </Route>
    
    </div>
  );
}

export default App;
