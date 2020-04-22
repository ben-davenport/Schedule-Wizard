import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeCard.css'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../actions/openModal';


class EmployeeCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: ""
        }
    }
 
    render(){
        const profile = this.props.profile;
        this.state.id = profile.id
        return(
            <>
                <div className="identifyingInfo">
                    <span className="initials">{this.props.initials}</span>
                    <span className="name">{profile.firstname} {profile.lastname}</span>
                </div>
                {/* <Link className="toProfile" to={`/u/coworker/${profile.id}`}> ></Link> */}
                <div className="toProfile" onClick={()=>{
                    this.props.openModal('open', "Employee profile", `${this.state.id}`)
                    }}>></div>
            </>
        )
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal: openModal,
    }, dispatcher)
};
export default connect(null, mapDispatchToProps)(EmployeeCard);