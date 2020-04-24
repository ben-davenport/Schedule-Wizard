//main page
//will have to include navbar
// calendar with your shifts
import React from 'react';
import './Dashboard.css';
import axios from 'axios';

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nextShifts: [],
        }
    }

    async componentDidMount(){
        const axiosResponse = await axios.get(`${window.apiHost}/todayshifts`)
        console.log(axiosResponse)
        const shifts = axiosResponse.data
        let nextShift = shifts.map((shift,i)=>{
                return(
                    <>
                        <li key={i} id="day">{shift.start_time}</li>
                        <li key={i} id="startTime">{shift.start_time}</li>
                        <li key={i} id="endTime">{shift.end_time}</li>
                    </>
                    )
                    })
        if(shifts.length<1){
            nextShift= <li>No Upcoming Shifts</li>
        }
        this.setState({
            nextShifts: nextShift
        })
        }
    
    
    render(){
        return(
        <div className="frame">
            <div className="nextShift">
                <ul>Next Shift
                    {this.state.nextShifts}
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