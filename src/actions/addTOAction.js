 // import axios from 'axios';

 export default(data)=>{
    console.log('Add Time Off Action:')
    console.log(data)
    
    // for later
    // const addTO = `${window.apiHost}/somethingsomethingsomething`;
    // const axiosResponse = axios.post(addTO, data);

    return{
        type: "newTO",
        payload: data,
        //payload: axiosResponse
    }
}