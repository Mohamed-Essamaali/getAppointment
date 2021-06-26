import React,{useState,useEffect} from 'react'
import {Route, Link, useParams} from 'react-router-dom'

const Calendar = ()=>{
    const initialData = {
        day: new Date().getDate(),
        month: new Date().getMonth()+1,
        task:'',
        completed:false
    }
    const[tasks,setTasks] = useState([initialData])
    // const[startIndex,setStartIndex]= useState(0)
    
    const[currentMonth,setCurrentMonth] = useState(new Date().getMonth()+1)
    const[prevMonth,setPrevMonth] = useState(currentMonth-1)
    const[currentDate,setCurrentDate] = useState(new Date(new Date().getFullYear(),currentMonth,0))
    console.log('current day ',new Date().getDate())
    const months = ['January', 'Feb','March', "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let date = new Date();
    let firstDay  = new Date(date. getFullYear(), currentMonth-1, 1)
    // let lastDay  = new Date(date. getFullYear(), date. getMonth()+1, 0)

    const numCurrDays = new Date(new Date().getFullYear(),currentMonth,0).getDate()
    const numPrevDays = new Date(new Date().getFullYear(),prevMonth,0).getDate()
 
    const numberDays = []

    let indexFirstDay = firstDay.getDay()
    let startIndex = 2
    // starting index prev month on current view 
    if (numPrevDays==30){
        startIndex = 31
    }
    else if(numPrevDays==31){
        startIndex = 32
    }else if(numPrevDays==29){
        startIndex = 30
    }

    // generate default calendar
    for(let i=1;i<=numCurrDays;i++){
        numberDays.push({month:currentMonth,day:i})
    }
    
   
    //adding days from previous month
    for(let i=0;i<indexFirstDay;i++){
        numberDays.unshift({month:currentMonth-1,day: startIndex-=1})
    }
    // adding days of next month
    if(numberDays.length<35){
        let adding = 35-numberDays.length
        for(let i = 1;i<=adding;i++){
            numberDays.push({month:currentMonth+1,day:i})
        }
    }

    console.log('default current month ', currentMonth)
    console.log('default Prev month ', prevMonth)
    console.log('first day ',firstDay)
    console.log('index of first day ',indexFirstDay)
    console.log('start index',startIndex)


    // days[new Date().getDay()]} {initialData.day} {months[initialData.month]} {new Date().getFullYear()
    // console.log('first day', firstDay.getDay())
    // console.log('index ',indexOfday)
    // console.log('last day ', lastDay)
    return(
        <div className='container'>
            <h1>Welcome to scheduling Calendar </h1>
            {/* <h2> Today is {currentDate.toDateString()} </h2> */}
            <div className='nav-button'>

                <div onClick={()=>{
                    setCurrentMonth(currentMonth-1);
                    setPrevMonth(currentMonth)
                 
                }} > Prev </div>
                <div onClick = {()=>{
                    setCurrentMonth(new Date().getMonth()+1)
                    }}> Current</div>

                <div onClick={()=>{
                    setCurrentMonth(currentMonth+1);
                    setPrevMonth(currentMonth);
                   
                 
                }
                    }> next </div>
                
            </div>
            <div className='daysHeader'>
                {days.map((day,i)=>{
                    return (<div className='header-name' key = {i} >
                        {day}
                        </div>)
                })}

            </div>
            <div className='days'>
               
            {numberDays.map((day,index)=>{
                return (
                    <div className= {new Date().getDate()===day.day && new Date().getMonth()+1===day.month ? ` oneDay current`:`oneDay `}
                     key={index} 
                     onClick = {()=>{
                         console.log(day.month);
                        console.log('today is ',day.day)}}
                     >
                        {day.day}
                    </div>
                    )
            })}
            </div>

        </div>
    )
}

export default Calendar