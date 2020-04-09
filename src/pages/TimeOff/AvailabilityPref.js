import React from 'react';
import './AvailabilityPref.css';

class AvailabilityPref extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
    <div>
        <div className="modalTitle">
            <div clasName="TitleHero">AVAILABILITY PREFERENCES</div>
        </div>
            <div className="date">Starting on: DATE</div>
            <form className="availabilityOptions">
                <label for="startTime">Start Time:</label>
                    <input type="time" id="startTime" name="startTime" />
                <label for="endTime">End Time:</label>
                    <input type="time" id="endTime" name="endTime" />
                    <p className="repeated">Repeated Every?</p>
                <div className="repeatRadio">
                        <input type="radio" id="noRepeat" name="repeats" value="noRepeat" />
                            <label for="noRepeat">None</label>
                        <br />
                        <input type="radio" id="week" name="repeats" value="week" />
                            <label for="week">Week</label>
                        <br/>
                        <input type="radio" id="twoWeeks" name="repeats" value="twoWeeks" />
                            <label for="twoWeeks">2 Weeks</label>
                </div>
                <p>Repeat ends on:</p>
                    <input type="date" id="endDate" name="endDate" />
                <label for="notes">Notes:</label>
                <input type="text" id="notes" name="notes" />
                <input type="submit" id="submit"></input>
            </form>
    </div>
    )
    }
}
export default AvailabilityPref;