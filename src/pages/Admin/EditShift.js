import React from 'react';
import './EditShift.css';

class EditShift extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
        <div>
            <div className="header">
                <div>X</div>
                <div>Shift details</div>
                <div>Save</div>
            </div>
            <div className="details">
                <div>Date</div>
                <div>Time</div>
                <div>Employee Change</div>
            </div>
            <button>Delete</button>
        </div>)
    }
}
export default EditShift;