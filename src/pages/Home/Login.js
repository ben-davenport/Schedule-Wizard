//modal login
import React from 'react';
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        let titleColor = {color:'white'};
        return(
        
            <form>
                <h1 className='title'>Login:</h1>
                <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email"></input>
                <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password"></input>
                    <br />
                <input type="submit" value="Log in" name="submit" />
                <br />
            </form>
        )
    }
}
export default Login;