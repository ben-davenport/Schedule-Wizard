//separate page list of employees
import React from 'react';
import './Employees.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../actions/openModal';
import axios from 'axios';
import Profile from './Profile';



class Employees extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            profiles: []
        }
    }
    componentDidMount(){
        const axiosResponse = await axios.get(`${window.apiHost}/profiles`);
        const profiles = axiosResponse.data.map((profile, i)=>{
            return(
                <div key={i}>
                    <Profile abode={profile}/>
                </div>
            )
        })
        console.log(profiles)
        this.setState({
            profiles: profiles,
        })
    }

    render(){
        return(
        <div>
            <header>
                <div className="title">Employees</div>
                <div className="addEmployee" onClick={()=>{this.props.openModal('open', "Add employee")}}>+</div>
            </header>
            <ul className="employees">
                <li>
                    <div className="identifyingInfo">
                        <span className="initials">HP</span>
                        <span className="name">Harry Potter</span>
                    </div>
                    <div className="toProfile" onClick={()=>{this.props.openModal('open', "Employee profile")}}>></div>
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
function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal: openModal,
    }, dispatcher)
};

export default connect(null, mapDispatchToProps)(Employees);