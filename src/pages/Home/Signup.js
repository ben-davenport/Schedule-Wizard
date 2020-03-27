import React from 'react';
class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
        <div>
            <form>
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName"></input>
                    <label for="lastName">Last name:</label>
                    <input type="text" id="lastName" name="lastName"></input>
                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email"></input>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password"></input>
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword"></input>
                </form>
        </div>)
    }
}
export default Signup;