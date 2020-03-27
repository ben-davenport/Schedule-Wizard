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
        <div>
            <div className="nextShift">
                <ul>
                    <li id="day"></li>
                    <li id="startTime"></li>
                    <li id="endTime"></li>
                </ul>
            </div>
            <div className="todaySchedule">
                <ul className="firstShift">
                    <li id="name"></li>
                    <li id="start"></li>
                    <li id="end"></li>
                </ul>
            </div>
        </div>)
    }
}
export default Dashboard;