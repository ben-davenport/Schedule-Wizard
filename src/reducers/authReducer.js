export default(state={}, action)=>{
    console.log(`firing up authReducer`)
    if (action.type === "login"){
        console.log(action)
        return action.payload
        }

    else if(action.type === "signup"){
        console.log(action)
        return action.payload
    }

    else if(action.type === "logout"){
        console.log(action)
        return {}
    }

    return state;
} 