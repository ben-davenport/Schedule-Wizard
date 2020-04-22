const initState = {
    openClose : "closed",
    content : "",
    id: "",
}

export default(state=initState, action)=>{
    if(action.type === 'CHANGE_MODAL'){
        return action.payload;
    }
    return state;
}