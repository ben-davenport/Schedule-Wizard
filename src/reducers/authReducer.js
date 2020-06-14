export default(state={}, action)=>{
    console.log(`firing up authReducer`)
    
    if (action.type === "login"){
        console.log(action.payload.data)
        return action.payload.data
        }

    else if(action.type === "signup"){
        console.log(action.payload.data)
        if(action.payload.data.token){
            const {token, email, firstname, lastname} = action.payload.data
            localStorage.clear('token', token);
            localStorage.setItem('token', token)
            localStorage.setItem('email', email);
            localStorage.setItem('firstname', firstname);
            localStorage.setItem('lastname', lastname);
        }
        return action.payload.data
    }

    else if(action.type==="addEmployee"){
        console.log(action)
        return action.payload.data
    }

    else if(action.type === "logout"){
        console.log(action)
        return {}
    }

    return state;
} 