import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{
    handleClick = ()=>{
        let mainNav = document.getElementById('js-menu');
        let navBarToggle = document.getElementById('js-navbar-toggle');
        navBarToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
    })}

    constructor(props){
        super(props)
        this.state = {
        }
    }
    

    render(){
        return(
        <nav className="navBar">
            <span className="navbar-toggle" id="js-navbar-toggle" 
                // onClick={document.getElementById('js-menu').toggle('active')}
                onClick={this.handleClick}>
                    <i className="fas fa-bars"></i>
            </span>
            <a href="/u" className="logo">logo</a>
            <ul className="mainNav" id="js-menu">
                <li>
                    <a className="navLink" href="/">Notifications</a></li>
                <li>
                    <a className="navLink" href="/u/dashboard">Dashboard</a></li>
                <li>
                    <a className="navLink" href="/u/admin/newshift">Scheduler</a></li>
                <li>
                    <a className="navLink" href="/u/timeoff">Time Off</a></li>
                <li>
                    <a className="navLink" href="/u/coworkers">Co-Workers</a></li>
                <li>
                    <a className="navLink" href="/u/availability">Availability</a></li>
            </ul>
        </nav>
        )
    }
}
export default NavBar;