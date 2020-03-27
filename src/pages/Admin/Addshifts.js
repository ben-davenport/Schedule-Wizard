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
            <header>
                <div>Add Shift</div>
                <div>X</div>
            </header>
            {/* form?? */}
            <div className="details">
                <div>Day, Date</div>
                <div>Time</div>
                <div>Employees:
                    <ul>
                        <li>Employee 1</li>
                    </ul>
                </div>
                <p>Add Note</p>
            </div>
        </div>
        )}
}
export default Addshifts;