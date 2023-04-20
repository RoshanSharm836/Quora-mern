function addfollower(data,dispatch){
    dispatch(
        {
            type:"DATA",
            payload:data
        }
    )
}
export default addfollower