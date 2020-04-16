import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginAction from '../../actions/signUpAction';


class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
        <div>
            <header className="title">Register<br/></header>
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
                    <input type="submit" value="submit" />
                </form>
        </div>)
    }
}
export default Signup;