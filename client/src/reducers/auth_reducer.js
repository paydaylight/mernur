const initState = {login: '', isLoggedIn: false, isLoading: false}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state, isLoggedIn: true, login: action.payload, isLoading: false};
        case 'UNAUTHORIZED':
            return {...state, isLoggedIn: false, isLoading: false};
        default:
            return state;
    }
}

export default authReducer;