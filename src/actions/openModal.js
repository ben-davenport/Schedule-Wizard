export default (openClose, content)=>{
    return{
        type: "CHANGE_MODAL",
        payload: {
            openClose,
            content,
        },
    }
}
