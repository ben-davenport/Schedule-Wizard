// import axios from 'axios';

export default(data)=>{
    console.log('Add Employee Action:')
    console.log(data)

    // for later
    // const addEmployee = `${window.apiHost}/somethingsomethingsomething`;
    // const axiosResponse = axios.post(addEmployee, data);

    return{
        type: "addEmployee",
        payload: data,
        //payload: axiosResponse
    }
}