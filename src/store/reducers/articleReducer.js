const initState = {
}

const articleReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ARTICLE':
            console.log('created note', action.article)
            return statse
        case 'CREATE_ARTICLE_ERROR':
            console.log('cannot create note', action.err)
            return state
        case 'DELETE_ARTICLE':
            console.log('created ARTICLE', action.article)
            return state
        case 'DELETE_ARTICLE_ERROR':
            console.log('cannot create ARTICLE', action.err)
            return state
        case 'EDIT_ARTICLE':
            console.log('created ARTICLE', action.article)
            return state
        case 'EDIT_ARTICLE_ERROR':
            console.log('cannot create ARTICLE', action.err)
            return state
        default: 
            return state
    }
}

export default articleReducer