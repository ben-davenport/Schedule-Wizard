// import axios from 'axios';

export default(data)=>{
    console.log('Add Shift Action:')
    console.log(data)

    // for later
    // const addShift = `${window.apiHost}/somethingsomethingsomething`;
    // const axiosResponse = axios.post(addShift, data);

    return{
        type: "addShift",
        payload: data,
        //payload: axiosResponse
    }
}