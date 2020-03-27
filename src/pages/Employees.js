//separate page list of employees
import React from 'react';
import './Employees.css'
class Employees extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
        <div>
            <header>
                <div className="title">Employees</div>
                <div className="addEmployee"><a href="/u/addEmployee">+</a></div>
            </header>
            <ul className="employees">
                <li>
                    <div className="identifyingInfo">
                        <span className="initials">HP</span>
                        <span className="name">Harry Potter</span>
                    </div>
                    <div className="toProfile"><a href="#">></a></div>
                </li>
                <li>
                    <div className="identifyingInfo">
                        <span className="initials">AD</span>
                        <span className="name">Albus Dumbledore</span>
                    </div>
                    <div className="toProfile"><a href="#">></a></div>
                </li>
            </ul>
        </div>)
    }
}
export default Employees;