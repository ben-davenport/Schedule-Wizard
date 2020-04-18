import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './AvailabilityPref.css';
import availabilityAction from '../../actions/availabilityAction';

class AvailabilityPref extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            startDate: "",
            endDate: "",
            startTime: "",
            endTime: "",
            repeat: "",
            notes: "",
        }
    }

    changeStartDate = (e) => {this.setState({startDate: e.target.value})}
    changeEndDate = (e) =>{this.setState({endDate: e.target.value})}
    changeStartTime =(e) =>{this.setState({startTime: e.target.value})}
    changeEndTime = (e) =>{this.setState({endTime: e.target.value})}
    changeRepeat = (e) =>{this.setState({repeat: e.target.value})}
    changeNotes = (e) =>{this.setState({notes: e.target.value})}

    availSubmit = (e) =>{
        e.preventDefault();
        const availabilityData = {...this.state}
        console.log('availability preference form submitted')
        this.props.availabilityAction(availabilityData);
    }
    render(){
        return(
    <div>
        <div className="modalTitle">
            <div className="TitleHero">AVAILABILITY PREFERENCES</div>
        </div>
            <form className="availabilityOptions">
                <label htmlFor="startDate">Start Date:</label>
                    <input type="date" id="startDate" name="startDate" onChange={this.changeStartDate} value={this.state.startDate}/>
                <label htmlFor="startTime">Start Time:</label>
                    <input type="time" id="startTime" name="startTime" onChange={this.changeStartTime} value={this.state.startTime}/>
                <label htmlFor="endTime">End Time:</label>
                    <input type="time" id="endTime" name="endTime" onChange={this.changeEndTime} value={this.state.endTime}/>
                    <p className="repeated">Repeated Every?</p>
                <div className="repeatRadio">
                        <input type="radio" id="noRepeat" name="repeats" value="noRepeat" onChange={this.changeRepeat} />
                            <label htmlFor="noRepeat">None</label>
                        <br />
                        <input type="radio" id="week" name="repeats" value="week" onChange={this.changeRepeat}/>
                            <label htmlFor="week">Week</label>
                        <br/>
                        <input type="radio" id="twoWeeks" name="repeats" value="twoWeeks" onChange={this.changeRepeat}/>
                            <label htmlFor="twoWeeks">2 Weeks</label>
                </div>
                <p>Repeat ends on:</p>
                    <input type="date" id="endDate" name="endDate" onChange={this.changeEndDate} value={this.state.endDate}/>
                <label htmlFor="notes">Notes:</label>
                    <input type="text" id="notes" name="notes" onChange={this.changeNotes} value={this.state.notes}/>
                <button type="submit" id="submit" onClick={this.availSubmit}>Submit</button>
            </form>
    </div>
    )
    }
}

function mapStateToProps(state){
    return{
        availability: state.availability
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        availabilityAction: availabilityAction,
    }, dispatcher)
};

export default connect(mapStateToProps, mapDispatchToProps)(AvailabilityPref);