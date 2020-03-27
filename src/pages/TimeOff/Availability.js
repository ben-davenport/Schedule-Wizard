// separate page
import React from 'react';
import './Availability.css'
class Availability extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
            <div className="title">Availability</div>
            <div className="Calendar">
            </div>
            <div className="availDetails">
                <div className="oneDay">
                    <ul className='prefHeader'>
                        <li className="dayDate">Day, Date</li>
                        <li className="addPref"><a href="./availabilitypreference">+</a></li>
                    </ul>
                    <div className="preference">
                        <li>Unavailable</li>
                        <li>Unavailable</li>
                    </div>
                </div>
            </div>
        </div>
            )
    }
}
export default Availability;