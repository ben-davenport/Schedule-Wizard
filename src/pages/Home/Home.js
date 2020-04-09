import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../../actions/openModal';

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
        <div>
            <ul className="login">
                <li className="login" onClick={()=>{this.props.openModal('open', "Sign up")}}>New Employee</li>
                <li className="greenLogin" onClick={()=>{this.props.openModal('open', "Log in")}}>Login</li>

            </ul>
            <div className="symbol">
                <ul>
                    <li><a href="/"> <span className="fas fa-hat-wizard"/> </a></li>
                </ul>
            </div>
            <div className="motto">
                BE A SCHEDULING WIZ
            </div>
            <div>
                <p className="tagline">Start Scheduling Today!</p>
                <div className="inputs">
                    <form>
                    <br />
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName"></input>
                    <br />
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName"></input>
                    <br />
                    <label htmlFor="company">Company Name:</label>
                    <input type="text" id="company" name="company"></input>
                    <br />
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email"></input>
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password"></input>
                    <br />
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword"></input>
                    <br />
                        <input className="submitBtn" type="submit" value="submit" id="submit" />
                    </form>
                </div>
            </div>
        </div>)
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal: openModal,
    }, dispatcher)
};

export default connect(null, mapDispatchToProps)(Home);