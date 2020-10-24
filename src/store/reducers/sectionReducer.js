const initState = {
}

const sectionReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_SECTION':
            console.log('created Section', action.section)
            return state
        case 'CREATE_BOARD_ERROR':
            console.log('cannot create section', action.err)
            return state
        case 'DELETE_SECTION':
            console.log('deleted Section', action.section)
            return state
        case 'DELETE_SECTION_ERROR':
            console.log('cannot delete section', action.err)
            return state
        case 'EDIT_SECTION':
            console.log('created Section', action.section)
            return state
        case 'EDIT_BOARD_ERROR':
            console.log('cannot create section', action.err)
            return state
        default: 
            return state
    }
}

export default sectionReducer