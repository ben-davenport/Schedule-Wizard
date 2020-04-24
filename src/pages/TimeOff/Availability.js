// separate page
import React from 'react';
import './Availability.css'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../../actions/openModal';
import axios from 'axios';

class Availability extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            availability:[]
        }
    }

    async componentDidMount(){
        const axiosResponse = await axios.get(`${window.apiHost}/myAvailability`);
        console.log(axiosResponse.data)
        const availability = axiosResponse.data.map((available, i)=>{
            return(
            <div key={i} className="availDetails">
                <div className="oneDay">
                    <ul className='prefHeader'>
                        <li className="dayDate">{available.day_of_week}</li>
                        <li className="addPref" onClick={()=>{this.props.openModal('open', "Availability pref")}}>+</li>
                    </ul>
                    <div className="preference">
                        <li>Unavailable</li>
                        <li>Unavailable</li>
                    </div>
                </div>
            </div>
            )
        })
        this.setState({
            availability: availability,
        })
    }
        
    


    render(){
        return(
        <div>
            <div className="title">Availability</div>
            <div className="Calendar">Recurring Avvailability</div>
            <div className="timeOff" onClick={()=>{this.props.openModal('open', "Time off")}}>Time Off +</div>
            {this.state.availability}
            {/* <div className="availDetails">
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
            </div> */}
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