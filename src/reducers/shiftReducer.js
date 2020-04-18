export default(state={}, action)=>{
    console.log(`firing up shift reducer`)
    if(action.type === "addShift"){
        console.log(action.payload)
        return action.payload
    }
    
    return state
}