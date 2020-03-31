import React from 'react';
import './EditShift.css';

class EditShift extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    };

    render(){
        return(
        <div>        
            <header className="title">
                <div className="exit">X</div>
                <div className="titleName">Edit Shift</div>
            </header>
            <form className="newShiftDetails">
                <div className="newShiftDate">
                    <label className="theLabels" for="updateDate">Date: </label> <br />
                    <input type="date" id="updateDate" name="updateDate" />
                </div>
                <div>
                    <label className="theLabels" for="editStart">Start Time:</label> <br />
                        <input type="time" id="editStart" name="editStart" /> <br />
                    <label className="theLabels" for="editEnd">End Time:</label> <br />
                        <input type="time" id="editEnd" name="editEnd" />
                </div>
                <div>
                    <label for="editEmployee">Choose Employee:</label>
                    <select id="editEmployee" name="editEmployee">
                        <option> Employee 1</option>
                        <option> Employee 2</option>
                    </select>
                </div>
                <label for="editNotes">Notes:</label>
                <input type="text" id="notes" name="editNotes" />
                    <br />
                <input type="button" value="Update Shift"/>
                    <br />
                    <br />
                <input type="button" value="Delete Shift" id="delete"/>
            </form>
        </div>
        )};
        };


export default EditShift;