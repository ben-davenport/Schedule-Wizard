//MODAL MUCH?
import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import addEmpAction from '../../actions/addEmployeeAction';
import './AddEmployee.css';

class AddEmployee extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            first: "",
            last: "",
            company: "",
            email: "",

        }
    }

    changeEmail = (e) =>{this.setState({email: e.target.value})}
    changeFirst = (e) =>{this.setState({first: e.target.value})}
    changeLast = (e) =>{this.setState({last: e.target.value})}

    submitSignup = (e)=>{
        e.preventDefault();
        const formData = {...this.state}
        console.log('add employee form submitted')
        this.props.addEmpAction(formData);
        };

    render(){
        return(<div>
            <div className="title">
                <div className="titleName">Add Employee</div>
            </div>
            <form>
                    <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" onChange={this.changeFirst} value={this.state.first}></input>
                    <label htmlFor="lastName">Last name:</label>
                        <input type="text" id="lastName" name="lastName" onChange={this.changeLast} value={this.state.last}></input>
                    <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" onChange={this.changeEmail} value={this.state.email}></input>
                    <br />
                    <button type="submit" value="Add Employee" onClick={this.submitSignup}>Submit</button>
                    <br />
                </form>
        </div>)
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        addEmpAction: addEmpAction,
    }, dispatcher)
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);