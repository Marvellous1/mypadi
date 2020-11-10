const initState = {
}

const noteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_NOTE':
            console.log('created note', action.note)
            return statse
        case 'CREATE_NOTE_ERROR':
            console.log('cannot create note', action.err)
            return state
        case 'DELETE_NOTE':
            console.log('created NOTE', action.journal)
            return state
        case 'DELETE_NOTE_ERROR':
            console.log('cannot create NOTE', action.err)
            return state
        case 'EDIT_NOTE':
            console.log('created NOTE', action.journal)
            return state
        case 'EDIT_NOTE_ERROR':
            console.log('cannot create NOTE', action.err)
            return state
        default: 
            return state
    }
}

export default noteReducer