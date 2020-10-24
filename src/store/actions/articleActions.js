export const createArticle = (article) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection(article.Sid).doc(article.id).update({
            body: article.body,
            type: article.type
        }).then(() => {
            dispatch({ type: 'CREATE_NOTE', article})            
        }).catch((err) => {
            dispatch({ type: 'CREATE_NOTE_ERROR', err})
        })
    }
};