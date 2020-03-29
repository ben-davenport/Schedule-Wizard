//modal login
import React from 'react';
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
 
    render(){
        return(
        <div>
            <form>
                <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email"></input>
                <label for="password">Password:</label>
                    <input type="password" id="password" name="password"></input>
                    <br />
                <input type="submit" value="Log in" name="submit" />

            </form>
        </div>)
    }
}
export default Login;