import React from 'react';
// import {Link} from 'react-router-dom';
import './Home.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../../actions/openModal';
import signUpAction from '../../actions/signUpAction';


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            first: "",
            last: "",
            company: "",
            email: "",
            password: "",
            passConfirm: "",
        }
    }

    changeEmail = (e) =>{this.setState({email: e.target.value})}
    changeFirst = (e) =>{this.setState({first: e.target.value})}
    changeLast = (e) =>{this.setState({last: e.target.value})}
    changeCompany = (e) =>{this.setState({company: e.target.value})}
    changePass = (e) =>{this.setState({password: e.target.value})}
    changePassConfirm = (e)=>{this.setState({passConfirm: e.target.value})}

    submitSignup = (e)=>{
        e.preventDefault();
        const formData = {...this.state}
        console.log('signup form submitted')
        this.props.signUpAction(formData);
        };

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
                    <input type="text" id="firstName" name="firstName" onChange={this.changeFirst} value={this.state.first}></input>
                    <br />
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" onChange={this.changeLast} value={this.state.last}></input>
                    <br />
                    <label htmlFor="company">Company Name:</label>
                    <input type="text" id="company" name="company" onChange={this.changeCompany} value={this.state.company}></input>
                    <br />
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" onChange={this.changeEmail} value={this.state.email}></input>
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={this.changePass} value={this.state.password}></input>
                    <br />
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" onChange={this.changePassConfirm} value={this.state.passConfirm}></input>
                    <br />
                        <button className="submitBtn" onClick={this.submitSignup}>Submit</button>
                    </form>
                </div>
            </div>
        </div>)
    }
}
function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal: openModal,
        signUpAction: signUpAction,
    }, dispatcher)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);