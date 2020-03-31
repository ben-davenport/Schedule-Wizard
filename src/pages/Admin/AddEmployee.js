//MODAL MUCH?
import React from 'react';
import './AddEmployee.css';

class AddEmployee extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(<div>
            <div className="title">
                <div className="exit">X</div>
                <div className="titleName">Add Employee</div>
            </div>
            <form>
                    <label for="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName"></input>
                    <label for="lastName">Last name:</label>
                        <input type="text" id="lastName" name="lastName"></input>
                    <label for="email">Email Address:</label>
                        <input type="email" id="email" name="email"></input>
                    <label for="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    <br />
                    <input type="submit" value="Add Employee" />
                </form>
        </div>)
    }
}
export default AddEmployee;