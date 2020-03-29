import React from 'react';
import './Home.css';

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
                <li><a className="login" href="/register">New Employee</a></li>
                <li className="greenLogin"><a className="greenLogin" href="/login">Login</a></li>
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
                <div classsName="inputs">
                    <form>
                        <label for="firstName">First Name:</label>
                            <input type="text" id="firstName" name="firstName"></input>
                        <label for="lastName">Last name:</label>
                            <input type="text" id="lastName" name="lastName"></input>
                        <label for="email">Email Address:</label>
                            <input type="email" id="email" name="email"></input>
                            <br />
                        <input className="submitBtn" type="submit" value="submit" id="submit" />
                    </form>
                </div>
            </div>
        </div>)
    }
}
export default Home;