//separate page list of employees
import React from 'react';
import './Employees.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../actions/openModal';
import axios from 'axios';
import EmployeeCard from '../utility/EmployeeCard';
// import Profile from './Profile';



class Employees extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            profiles: [],
        }
    }

    //make an axios call, get all the profiles for that business
    async componentDidMount(){
        const axiosResponse = await axios.get(`${window.apiHost}/profiles`);
        const profiles = axiosResponse.data.map((profile, i)=>{
            const initials = `${profile.firstname[0]}${profile.lastname[0]}`
            return(
                <li key={i}>
                    <EmployeeCard profile={profile} initials={initials} />
                    {/* <div className="toProfile" onClick={()=>{this.props.openModal('open', "Employee profile")}}>></div> */}
                </li>
            )
        })
        this.setState({
            profiles: profiles,
        })
    }

    render(){
        return(
        <div>
            <header>
                <div className="title">Employees</div>
                <div className="addEmployee" onClick={()=>{this.props.openModal('open', "Add employee", "")}}>+</div>
            </header>
            <ul className="employees">
                {this.state.profiles}
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
