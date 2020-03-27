import React from 'react';
import './TORequests.css';

class TORequests extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(<div>
            <div className="Title">Time Off Requests</div>
            <ul className="requests">
                {/* should this be a form? */}
                <li>
                    <div className="initials">IN</div>
                    <ul className="person">
                        <li>Day</li>
                        <li>Date</li>
                        <li>Name</li>
                    </ul>
                    <p className="notes">Notes:</p>
                </li>
            </ul>
            
        </div>)
    }
}
export default TORequests;