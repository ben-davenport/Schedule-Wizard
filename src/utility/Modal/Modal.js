import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import './Modal.css';
import Login from '../../pages/Home/Login';
import Signup from '../../pages/Home/Signup';
import AddEmployee from '../../pages/Admin/AddEmployee';
import Addshift from '../../pages/Admin/Addshifts';
import EditShift from '../../pages/Admin/EditShift';
import AvailabilityPref from '../../pages/TimeOff/AvailabilityPref';
import TimeOff from '../../pages/TimeOff/SingleTO';
import Profile from '../../pages/Profile';
import openModal from '../../actions/openModal';

class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        let modalInLineStyle
        if(this.props.siteModal.openClose === "open"){
            modalInLineStyle = {display: 'block'}
        }
        else{
            modalInLineStyle = {display: 'none'}
        }

        const contentObj= {
            "Log in" : <Login />,
            "Sign up" : <Signup />,
            "Add employee" : <AddEmployee/>,
            "Add shift" : <Addshift/>,
            "Edit shift":<EditShift/>,
            "Availability pref": <AvailabilityPref/>,
            "Time off":<TimeOff/>,
            "Profile":<Profile/>,
        };
        let modalContent
        if(contentObj[this.props.siteModal.content]){
            modalContent = contentObj[this.props.siteModal.content]
        }

        return(
        <div className="site-modal" style={modalInLineStyle}>
            <div className="modal-content">
                <span onClick={this.props.openModal} className="close">&times;</span>
                {modalContent}
            </div>
        </div>)
    }
};
function mapStateToProps(state){
    return{
        siteModal: state.siteModal,
    }
};
function mapDispatchToProps(dispatcher){
    return bindActionCreators({
    openModal: openModal,
    }, dispatcher)
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);