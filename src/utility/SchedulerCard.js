import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../actions/openModal';
import axios from 'axios';


class SchedulerCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
 
    // async componentDidMount({
    // //     shiftNameResponse = await axios.get(`${window.apiHost}/userName`)
    // // })
    render(){
        const shift = this.props.shift
        const startTime = shift.start_time.slice(11,16)
        const endTime = shift.end_time.slice(11,16)

        return(
        <div>
            {startTime} - {endTime}
            <div className="toProfile" onClick={()=>{this.props.openModal('open', "Employee profile")}}>></div>
        </div>)
    }
}
function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal: openModal,
    }, dispatcher)
};

export default connect(null, mapDispatchToProps)(SchedulerCard);