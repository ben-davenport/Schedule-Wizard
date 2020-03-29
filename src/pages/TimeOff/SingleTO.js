//modal
import React from 'react';
import './SingleTO.css';
class SingleTO extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(<div>
            <div className="title">
                <div className="close">X</div>
                <div className="titleContainer">
                    <div className="theTitle">New Time Off Request</div>
                </div>
            </div>
            <form className="details">
                <ul className="name">
                    <li>Name:</li>
                    <li>Hermione Granger</li>
                </ul>
                <div className="allDay">
                    <p>All Day?</p>
                    <label for="allDay">Yes 
                        <input type="radio" id="allDay" name="allDay" value="allDay" />
                    </label>
                    <label for="notAllDay">No
                        <input type="radio" id="notAllDay" name="allDay" value="notAllDay" />
                    </label>
                </div>
                <div className="dates">
                    <div className="eachDate">
                        <label for="startDate">Start Date:</label><br />
                        <input type="date" id="startDate" name="timeOffdates" />
                    </div>
                    <div className="eachDate">
                        <label for="endDate">End Date:</label><br />      
                        <input type="date" id="endDate" name="timeOffdates" />
                    </div>              
                </div>
                <div className="notesSection">
                    <label for="notes">Notes:</label>
                        <input type="text" id="notes" name="notes" />
                </div>
                <div className="submitButton">
                    <input type="submit" value="submit" id="submit" />
                </div>
            </form>
        </div>)
    }
}
export default SingleTO;