import React from 'react';
import './Scheduler.css';

class Scheduler extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
        <div>
            <div className="Title">
                <p>Scheduler</p>
                <div className="newShift">+</div>>
            </div>
            <div className="calendar">
                <ul>
                    <li className="date">
                        <li>Shift1 Time</li>
                            <li>></li>
                        <li>Shift2</li>
                    </li>
                </ul>
            </div>

            
            
        </div>)
    }
}
export default Scheduler;