//main page
//will have to include navbar
// calendar with your shifts
import React from 'react';
import './Dashboard.css';

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
        <div className="frame">
            <div className="nextShift">
                <ul>Next Shift
                    <li id="day">Day, Date</li>
                    <li id="startTime">Start Time</li>
                    <li id="endTime">End Time</li>
                </ul>
            </div>
            <div className="todaySchedule">
                <p>Scheduled Today</p>
                <ul className="firstShift">
                    <li id="name">Belatrix</li>
                    <li id="start">11:30</li>
                    <li id="end">2:30</li>
                </ul>
            </div>
        </div>)
    }
}
export default Dashboard;