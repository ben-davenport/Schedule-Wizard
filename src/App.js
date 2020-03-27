import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import NavBar from './utility/NavBar/NavBar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Availability from './pages/TimeOff/Availability';
import AvailabilityPref from './pages/TimeOff/AvailabilityPref';
import Addshifts from './pages/Admin/Addshifts';
import Signup from './pages/Home/Signup';
import TimeOff from './pages/TimeOff/SingleTO';
import MySchedule from './pages/MySchedule';
import AddEmployee from './pages/Admin/AddEmployee';
import Profile from './pages/Profile';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
        <Router>
            <Route path="/u" component={NavBar} />
            <Route exact path="/" component={Home} />
            <Route path="/u/dashboard" component={Dashboard}/>
            <Route path="/u/coworkers" component={Employees}/>
            <Route path="/u/profile" component={Profile}/>
            <Route exact path="/u/availability" component={Availability}/>
            <Route path="/u/availabilitypreference" component={AvailabilityPref}/>
            <Route path="/u/admin/newshift" component={Addshifts}/>
            <Route path="/register" component={Signup}/>
            <Route path="/u/timeoff" component={TimeOff}/>
            <Route path="/u/myschedule" component={MySchedule}/>
            <Route path="/u/admin/addemployee" component={AddEmployee}/>

        </Router>)
    }
}
export default App;
