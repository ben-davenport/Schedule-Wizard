import React from 'react';
import './ShiftDetails.css';

class ShiftDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
        <div>
            <header>
                <div className="back"></div>
                <div className="title">Shift Details</div>
                <div className="edit">Edit</div>
            </header>
            <div className="details">
                <div className="date">Day, Date</div>
                <div className="shiftTime">Time-Time</div>
                <div className="location">Location</div>
            </div>
            <button>Publish</button>
        </div>)
    }
}
export default ShiftDetails;