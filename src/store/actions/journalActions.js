export const createJournal = (journal) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const journals = `boards/${journal.BoardID}/journals`
        firestore.collection(journals).add({
            title : journal.title,
            content : journal.content,
            createdAt: new Date()
        }).then((docRef) => {
            firestore.collection('journals').doc(docRef.id).set({ BoardId: journal.BoardID})
        }).then((docRef) => {
            firestore.collection(journals).doc(docRef.id).update({ journalId: docRef.id})
        }).then(() => {
            firestore.collection('boards').doc(journal.BoardID).update({ lastEdited: new Date()})
        }).then(() => {
            dispatch({ type: 'CREATE_JOURNAL', journal})            
        }).catch((err) => {
            dispatch({ type: 'CREATE_JOURNAL_ERROR', err})
        })
    }
};

export const deleteJournal = (journal) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const journals = `boards/${journal.BoardID}/journals`
        firestore.collection('journals').doc(journal.id).delete()
        .then(() =>{
            firestore.collection(journals).doc(journal.id).delete()
        }).then(() => {
            dispatch({ type: 'DELETE_JOURNAL', journal})            
        }).catch((err) => {
            dispatch({ type: 'DELETE_JOURNAL_ERROR', err})
        })
    }
};

export const editJournal = (journal) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const journals = `boards/${journal.BoardID}/journals`
        firestore.collection(journals).doc(journal.id).update({
            title: journal.title,
            content: journal.content
        }).then(() => {
            dispatch({ type: 'CREATE_JOURNAL', journal})            
        }).catch((err) => {
            dispatch({ type: 'CREATE_JOURNAL_ERROR', err})
        })
    }
};
