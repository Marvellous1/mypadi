const initState = {
    boards: [
        {id: '1', boardname: 'test1', price: 'test11'},
        {id: '2', boardname: 'test2', price: 'test12'},
        {id: '3', boardname: 'test3', price: 'test13'}
    ]
}

const boardReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_BOARD':
            window.location.replace(`board/${action.docRef.id}`);
            console.log('created board', action)
            return state
        case 'CREATE_BOARD_ERROR':
            console.log('cannot create project', action.err)
            return state
        case 'EDIT_BOARD':
            console.log('edit board', action.board)
            return state
        case 'EDIT_BOARD_ERROR':
            console.log('cannot edit project', action.err)
            return state
        case 'DELETE_BOARD':
            console.log('deleted board', action.board)
            return state
        case 'DELETE_BOARD_ERROR':
            console.log('cannot delete project', action.err)
            return state
        default: 
            return state
    }
}

export default boardReducer