import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'

import Modal from './utility/Modal/Modal';
import NavBar from './utility/NavBar/NavBar';

import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Availability from './pages/TimeOff/Availability';
import MySchedule from './pages/MySchedule';
import Scheduler from './pages/Admin/Scheduler';
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
            <Route path="/" component={Modal} />
            <Route exact path="/" component={Home} />
            <Route path="/u/dashboard" component={Dashboard}/>
            <Route path="/u/coworkers/" component={Employees}/>
            {/* <Route path='/u/coworker/:profileId' component={Profile} /> */}
            <Route exact path="/u/availability" component={Availability}/>
            <Route path="/u/myschedule" component={MySchedule}/>
            <Route path='/u/admin/scheduler' component={Scheduler} />
            {/* <Route path='/u/profile' component={Profile} /> */}
        </Router>)
    }
}
export default App;
