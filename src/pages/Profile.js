import React from 'react';
import './Profile.css';
import axios from 'axios';


class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            initials: '',
            profile: {},
        }
    }

    async componentDidMount(){
        const profileId = this.props.match.params.id;
        const url = '${window.apiHost}/coworkers/${profileId}';
        const axiosResponse = await axios.get(url);
            console.log(axiosResponse.data);
        // const initials = axiosResponse.data.firstname[0]
        this.setState({
                profile: axiosResponse.data,
                initials: initials,
            })
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
                        <div className="name">{`${this.state.profile.firstname} ${this.state.profile.lastname}`}</div>
                </div>
                <ul className="email">
                    <li>Email: </li>
                    <li>{this.state.profile.email}</li>
                </ul>
            </div>
        </div>)
    }
}
export default Profile;