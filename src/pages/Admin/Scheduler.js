import React from 'react';
import './Scheduler.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../../actions/openModal';

class Scheduler extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
        <div>
            <header className="title">
                <h1>Scheduler</h1>
                <div className="newShift" onClick={()=>{this.props.openModal('open', "Add shift")}}>+</div>
            </header>
            <div className="calendar">
                <ul>
                    <li className="date">
                        <li>Shift1 Time</li>
                            <li onClick={()=>{this.props.openModal('open', "Shift details")}}>></li>
                        <li>Shift2</li>
                    </li>
                </ul>
            </div>

            
            
        </div>)
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal: openModal,
    }, dispatcher)
};

export default connect(null, mapDispatchToProps)(Scheduler);