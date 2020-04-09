// separate page
import React from 'react';
import './Availability.css'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../../actions/openModal';

class Availability extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
        <div>
            <div className="title">Availability</div>
            <div className="Calendar"></div>
            <div className="timeOff" onClick={()=>{this.props.openModal('open', "Time off")}}>Time Off +</div>
            <div className="availDetails">
                <div className="oneDay">
                    <ul className='prefHeader'>
                        <li className="dayDate">Day, Date</li>
                        <li className="addPref" onClick={()=>{this.props.openModal('open', "Availability pref")}}>+</li>
                    </ul>
                    <div className="preference">
                        <li>Unavailable</li>
                        <li>Unavailable</li>
                    </div>
                </div>
            </div>
        </div>
            )
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal: openModal,
    }, dispatcher)
};
export default connect(null, mapDispatchToProps)(Availability);