import React from 'react';
import axios from 'axios';

class MySchedule extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
async componentDidMount(){
    const axiosResponse = await axios.get(`${window.apiHost}/allshifts`)
    console.log(axiosResponse)
}
    render(){
        return(<>
            
        </>)
    }
}
export default MySchedule;