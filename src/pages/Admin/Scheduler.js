import React from 'react';
import './Scheduler.css';
import SchedulerCard from '../../utility/SchedulerCard'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../../actions/openModal';
import axios from 'axios';

class Scheduler extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            extantShifts : [],
            datesArr: [],
        }
    }

    async componentDidMount(){
        const shiftResponse = await axios.get(`${window.apiHost}/allshifts`)
        const dateArr =[]
        const shiftmap = shiftResponse.data.map((shift, i)=>{
            const date = shift.start_time.slice(0,10)
            if(dateArr.includes(date)){
                return( 
                    <div key={i}>
                        <SchedulerCard shift={shift} />
                    </div>
                    )
            }
            else{
                dateArr.push(date)
                console.log('date added')
                return(
                <div key={i}>
                    <h3>{date}</h3>
                    <SchedulerCard shift={shift}/>
                </div>)
            }
                // return shiftObj

            })
            console.log(dateArr)
            console.log(this.state.datesArr)
            this.setState({
                extantShifts : shiftmap
            })
            console.log(this.state.extantShifts)
            
        const timeOffResponse = await axios.get(`${window.apiHost}/timeoff`)
            console.log(timeOffResponse.data)
    }

    render(){
        return(
        <div>
            <header className="title">
                <h1>Scheduler</h1>
                <div className="newShift" onClick={()=>{this.props.openModal('open', "Add shift")}}>+</div>
            </header>
            <div className="calendar">
                {this.state.extantShifts}
                <ul>

                    {/* <li className="date">
                        <li>Shift1 Time</li>
                            <li onClick={()=>{this.props.openModal('open', "Shift details")}}>></li>
                        <li>Shift2</li>
                    </li> */}
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