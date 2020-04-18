import React from 'react';
import './Profile.css';

//Modal

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            first: 'Harry',
            last: 'Potter',
            initials: 'HP',
            email: 'hpotter@gmail.com',
            phone: '123-456-7890'
        }
    }

    render(){
        return(<div>
            <div className="head">
                <div className="title">Employee</div>
                <div className="edit">Edit</div>
            </div>
            <div classsName="details">
                <div className="nameInfo">
                        <div className="initials">{this.state.initials}</div>
                        <div className="name">{`${this.state.first} ${this.state.last}`}</div>
                </div>
                <ul className="email">
                    <li>Email: </li>
                    <li>{this.state.email}</li>
                </ul>
                    
                <ul className="phone">
                    <li>Phone Number:</li>
                    <li>{this.state.phone}</li>
                </ul>
            </div>
        </div>)
    }
}
export default Profile;