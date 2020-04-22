import React from 'react';
import './Profile.css';
import axios from 'axios';
import { connect } from 'react-redux';


class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            initials: " ",
            profile: {},
        }
    }

    async componentDidMount(){
        // const profileId = this.props.match.params.profileId;
        const profileId = this.props.siteModal.id;
        console.log(profileId)
        // console.log(this.props.profile.id)
        const url = `${window.apiHost}/profile/${profileId}`;
        const axiosResponse = await axios.get(url);
            console.log(axiosResponse.data);
        const initials = `${axiosResponse.data.firstname[0]} ${axiosResponse.data.lastname[0]}`
        this.setState({
                profile: axiosResponse.data,
                initials: initials,
            })
    }

    render(){
        return(
        <div>
            <div className="head">
                <div className="title">Employee</div>
                <div className="edit">Edit</div>
            </div>
            <div className="details">
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

function mapStateToProps(state){
    return{
        siteModal: state.siteModal,
    }
};
export default connect(mapStateToProps, null)(Profile);