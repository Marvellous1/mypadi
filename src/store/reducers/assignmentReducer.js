const initState = {
}

const assignmentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ASSIGNMENT':
            console.log('created assignment', action.assignment)
            return statse
        case 'CREATE_ASSIGNMENT_ERROR':
            console.log('cannot create assignment', action.err)
            return state
        case 'DELETE_ASSIGNMENT':
            console.log('created ASSIGNMENT', action.assignment)
            return state
        case 'DELETE_ASSIGNMENT_ERROR':
            console.log('cannot create ASSIGNMENT', action.err)
            return state
        case 'EDIT_ASSIGNMENT':
            console.log('created ASSIGNMENT', action.assignment)
            return state
        case 'EDIT_ASSIGNMENT_ERROR':
            console.log('cannot create ASSIGNMENT', action.err)
            return state
        default: 
            return state
    }
}

export default assignmentReducer