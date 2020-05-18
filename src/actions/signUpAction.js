// import axios from 'axios';

export default(data)=>{
    console.log('signupAction:')
    console.log(data)

    // for later
    // const signUpPost = `${window.apiHost}/users/signup`;
    // const axiosResponse = axios.post(signUpPost, data);

    return{
        type: "signup",
        payload: data,
        //payload: axiosResponse
    }
};