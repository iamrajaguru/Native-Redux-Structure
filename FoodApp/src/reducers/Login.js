const initstate={
    title: "login",    
    username:'',
    password:'',
};
export default(state = initstate,action)=>{
    switch(action.type){
        case 'UPDATE_DETAILS':
            return {...state,[action.key]:action.value}
            break;
        default:
            return state;

    }
}