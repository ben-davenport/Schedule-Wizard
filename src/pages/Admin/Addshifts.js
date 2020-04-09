//this will need the calendar, too
//this will be a separate page
// will require a 'publish' option
import React from 'react';
class Addshifts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
        <div>
            <header className="title">
                <div className="titleName">Add Shift</div>
            </header>
            <form className="newShiftDetails">
                <div className="newShiftDate">
                    <label className="theLabels" for="shiftDate">Date: </label> <br />
                    <input type="date" id="shiftDate" name="shiftDate" />
                </div>
                <div>
                    <label className="theLabels" for="startTime">Start Time:</label> <br />
                        <input type="time" id="startTime" name="startTime" /> <br />
                    <label className="theLabels" for="endTime">End Time:</label> <br />
                        <input type="time" id="endTime" name="endTime" />
                </div>
                <div>
                    <label for="employeeList">Choose Employee:</label>
                    <select id="employeeList" name="employeeList">
                        <option> Employee 1</option>
                        <option> Employee 2</option>
                    </select>
                </div>
                <label for="shiftNotes">Notes:</label>
                <input type="text" id="notes" name="shiftNotes" />
                <input type="submit"/>
            </form>
        </div>
        )}
}
export default Addshifts;