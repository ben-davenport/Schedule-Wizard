import axios from 'axios';

export default(data)=>{
    console.log('loginAction:')
    console.log(data)

    // for later
    // const loginUrl = `${window.apiHost}/users/login`;
    // const axiosResponse = axios.post(loginUrl, data);

    return{
        type: "login",
        payload: data,
        //payload: axiosResponse
    }
}