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
            <header className="title">Register<br/></header>
            <form>
                    <br />
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName"></input>
                    <br />
                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName"></input>
                    <br />
                    <label for="company">Company Name:</label>
                    <input type="text" id="company" name="company"></input>
                    <br />
                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email"></input>
                    <br />
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password"></input>
                    <br />
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword"></input>
                    <br />
                    <input type="submit" value="submit" />
                </form>
        </div>)
    }
}
export default Signup;