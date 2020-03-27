import React from 'react';
import './Profile.css';

//Modal

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(<div>
            <div className="head">
                <div className="close">X</div>
                <div className="title">Employee</div>
                <div className="edit">Edit</div>
            </div>
            <div classsName="details">
                <div className="nameInfo">
                    <ul>
                        <li className="initials">IN</li>
                        <li className="name"> My Name</li>
                    </ul>
                </div>
                <ul className="email">
                    <li>Email: </li>
                    <li>hpotter@gmail.com</li>
                </ul>
                    
                <ul className="phone">
                    <li>Phone Number:</li>
                    <li>555-555-5555</li>
                </ul>
            </div>
        </div>)
    }
}
export default Profile;