import React from 'react';
import './ShiftDetails.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../../actions/openModal';

class ShiftDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
        <div>
            <header>
                <div className="title">Shift Details</div>
                <div className="edit" onClick={()=>{this.props.openModal('open', "Edit shift")}}>EDIT</div>
            </header>
            <div className="details">
                <div className="date">Day, Date</div>
                <div className="shiftTime">Time-Time</div>
                <div className="location">Location</div>
            </div>
            <button>Publish</button>
        </div>)
    }
}
function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal: openModal,
    }, dispatcher)
};

export default connect(null, mapDispatchToProps)(ShiftDetails);