import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

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
                    <Link className="navLink" to="/">Notifications</Link></li>
                <li>
                    <Link className="navLink" to="/u/dashboard">Dashboard</Link></li>
                <li>
                    <Link className="navLink" to="/u/admin/newshift">Scheduler</Link></li>
                <li>
                    <Link className="navLink" to="/u/timeoff">Time Off</Link></li>
                <li>
                    <Link className="navLink" to="/u/coworkers">Co-Workers</Link></li>
                <li>
                    <Link className="navLink" to="/u/availability">Availability</Link></li>
            </ul>
        </nav>
        )
    }
}
export default NavBar;