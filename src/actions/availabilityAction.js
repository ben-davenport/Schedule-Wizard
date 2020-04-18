 // import axios from 'axios';

export default(data)=>{
    console.log('Availability Pref Action:')
    console.log(data)

    // for later
    // const addAvailability = `${window.apiHost}/somethingsomethingsomething`;
    // const axiosResponse = axios.post(addAvailability, data);

    return{
        type: "addAvailability",
        payload: data,
        //payload: axiosResponse
    }
}