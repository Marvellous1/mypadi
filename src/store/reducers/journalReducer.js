const initState = {
}

const journalReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_JOURNAL':
            window.location.replace(`board/${action.journal.BoardID}`);
            console.log('created Journal', action.journal)
            return state
        case 'CREATE_BOARD_ERROR':
            console.log('cannot create journal', action.err)
            return state
        case 'DELETE_JOURNAL':
            console.log('deleted Journal', action.journal)
            return state
        case 'DELETE_JOURNAL_ERROR':
            console.log('cannot delete journal', action.err)
            return state
        case 'EDIT_JOURNAL':
            console.log('created Journal', action.journal)
            return state
        case 'EDIT_BOARD_ERROR':
            console.log('cannot create journal', action.err)
            return state
        default: 
            return state
    }
}

export default journalReducer