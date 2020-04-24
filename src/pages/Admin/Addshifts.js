//this will need the calendar, too
//this will be a separate page
// will require a 'publish' option
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import addShiftAction from '../../actions/addShiftAction';
import axios from 'axios';

class Addshifts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: "",
            start: "",
            end: "",
            shiftEmployee: "",
            shiftNotes: "",
        }
    }
    async componentDidMount(){
        const employeesResponse = await axios.get(`${window.apiHost}/profiles`)
            console.log(employeesResponse.data)
    }

    changeEmail = (e) =>{this.setState({date: e.target.value})}
    changeStart = (e) => {this.setState({start: e.target.value})}
    changeEnd = (e) =>{this.setState({end: e.target.value})}
    changeShiftEmployee = (e) =>{this.setState({shiftEmployee: e.target.value})}
    changeNotes = (e) =>{this.setState({shiftNotes: e.target.value})}


    submitShift = (e)=>{
        e.preventDefault();
        const formData = {...this.state}
        console.log('new shift form submitted')
        this.props.addShiftAction(formData);
        };

    render(){
        return(
        <div>
            <header className="title">
                <div className="titleName">Add Shift</div>
            </header>
            <form className="newShiftDetails">
                <div className="newShiftDate">
                    <label className="theLabels" htmlFor="shiftDate">Date: </label> <br />
                    <input type="date" id="shiftDate" name="shiftDate" onChange={this.changeEmail} value={this.state.date}/>
                </div>
                <div>
                    <label className="theLabels" htmlFor="startTime">Start Time:</label> <br />
                        <input type="time" id="startTime" name="startTime" onChange={this.changeStart} value={this.state.start}/> <br />
                    <label className="theLabels" htmlFor="endTime">End Time:</label> <br />
                        <input type="time" id="endTime" name="endTime" onChange={this.changeEnd} value={this.state.end}/>
                </div>
                <div>
                    <label htmlFor="employeeList">Choose Employee:</label>
                    <select id="employeeList" name="employeeList" onChange={this.changeShiftEmployee} value={this.state.shiftEmployee}>
                        <option> Employee 1</option>
                        <option> Employee 2</option>
                    </select>
                </div>
                <label htmlFor="shiftNotes">Notes:</label>
                <input type="text" id="notes" name="shiftNotes" onChange={this.changeNotes} value={this.state.shiftNotes}/>
                <button type="submit" onClick={this.submitShift}>Submit </button>
            </form>
        </div>
        )}
}

function mapStateToProps(state){
    return{
        shift: state.shift
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        addShiftAction: addShiftAction,
    }, dispatcher)
};

export default connect(mapStateToProps, mapDispatchToProps)(Addshifts);