//modal
import React from 'react';
import './SingleTO.css';
class SingleTO extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(<div>
            <div className="Title">
                <p>New TO Request</p>
                <p>X</p>
            </div>
            <ul className="details">
                <li>Name:</li>
                <li>All Day?</li>
                <li>y/n</li>
                <li>Start Date:</li>
                <li>End Date:</li>
                <li>Notes: </li>
            </ul>
            <button>Submit</button>
        </div>)
    }
}
export default SingleTO;