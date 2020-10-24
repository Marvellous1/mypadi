const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('SIgnout success')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Signup success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_ERROR':
            console.log('SIgnup error')
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default authReducer