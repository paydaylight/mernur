import app from '../services/firebase'

export const loginAttempt = (login, password) => {
    return (dispatch, getState) => {
        
        app.auth().signInWithEmailAndPassword(login, password).then(res => {
            dispatch({type: 'LOGIN', payload: login})
        }).catch(err => {
            dispatch({type: 'UNAUTHORIZED'})
        })    
    }
}

export const unauthorized = () => {
    return {
        type: 'UNAUTHORIZED'
    }
}