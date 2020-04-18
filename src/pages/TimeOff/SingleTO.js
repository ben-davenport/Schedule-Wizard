import React from 'react';
import './SingleTO.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import addTOAction from '../../actions/addTOAction';

class SingleTO extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            startDate: "",
            endDate:"",
            allDay: "",
            notes: "",
        }
    }

    changeStartDate = (e) => {this.setState({startDate: e.target.value})}
    changeEndDate = (e) =>{this.setState({endDate: e.target.value})}
    changeAllDay = (e) =>{this.setState({allDay: e.target.value})}
    changeNotes = (e) =>{this.setState({notes: e.target.value})}

    submitTO = (e)=>{
        e.preventDefault();
        let timeOffData = {...this.state};
        console.log('Time Off form submitted');
        this.props.addTOAction(timeOffData)
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
                    <label htmlFor="allDay">Yes 
                        <input type="radio" id="allDay" name="allDay" onChange={this.changeAllDay} value="allDay"/>
                    </label>
                    <label htmlFor="notAllDay">No
                        <input type="radio" id="notAllDay" name="allDay" onChange={this.changeAllDay} value="notAllDay"/>
                    </label>
                </div>
                <div className="dates">
                    <div className="eachDate">
                        <label htmlFor="startDate">Start Date:</label><br />
                        <input type="date" id="startDate" name="timeOffdates" onChange={this.changeStartDate} value={this.state.startDate}/>
                    </div>
                    <div className="eachDate">
                        <label htmlFor="endDate">End Date:</label><br />      
                        <input type="date" id="endDate" name="timeOffdates" onChange={this.changeEndDate} value={this.state.endDate}/>
                    </div>              
                </div>
                <div className="notesSection">
                    <label htmlFor="notes">Notes:</label>
                        <input type="text" id="notes" name="notes" onChange={this.changeNotes} value={this.state.notes}/>
                </div>
                <div className="submitButton">
                    <button type="submit" value="submit" id="submit" onClick={this.submitTO}>Submit</button>
                </div>
            </form>
        </div>)
    }
}

function mapStateToProps(state){
    return{
        availability: state.availability,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        addTOAction: addTOAction,
    }, dispatcher)
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleTO);
