const initState = {login: '', isLoggedIn: false}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state, isLoggedIn: true, login: action.payload};
        case 'UNAUTHORIZED':
            return {...state, isLoggedIn: false};
        default:
            return state;
    }
}

export default authReducer;