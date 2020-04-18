export default(state={}, action)=>{
    console.log(`firing up availability reducer`)
    if(action.type === "addAvailability"){
        console.log(action.payload)
        return action.payload
    }
    else if(action.type === "newTO"){
        console.log(action.type)
        console.log(action.payload)
        return action.payload
    }
    
    return state
}