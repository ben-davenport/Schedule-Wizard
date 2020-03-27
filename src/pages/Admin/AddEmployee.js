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
                <div>X</div>
                <div>Add Employee</div>
            </div>

            {/* this should be a form  */}
            <div className="name">
                <div>First Name</div>
                <div>Last name</div>
                <div>Phone</div>
                <div>Email</div>
            </div>
            <button>SAVE</button>
        </div>)
    }
}
export default AddEmployee;