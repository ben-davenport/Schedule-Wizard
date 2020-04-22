export default (openClose, content, id)=>{
    return{
        type: "CHANGE_MODAL",
        payload: {
            openClose,
            content,
            id,
        },
    }
}
