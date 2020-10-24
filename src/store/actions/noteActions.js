export const createNote = (note) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('sections').doc(note.Sid).collection('notes').add({
            ...note,
            createdAt: new Date()
        }).then((docRef) => {
            firestore.collection('sections').doc(note.Sid).collection('notes').doc(docRef.id).update({ noteId: docRef.id})
        }).then(() => {
            dispatch({ type: 'CREATE_NOTE', note})            
        }).catch((err) => {
            dispatch({ type: 'CREATE_NOTE_ERROR', err})
        })
    }
};


export const deleteNote = (note) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('sections').doc(note.Sid).collection('notes'
        ).doc(note.id).delete().then(() => {
            dispatch({ type: 'DELETE_NOTE', note})            
        }).catch((err) => {
            dispatch({ type: 'DELETE_NOTE_ERROR', err})
        })
    }
};


export const editNote = (note) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('sections').doc(note.Sid).collection('notes'
        ).doc(note.id).update({
            title: note.title,
            objective: note.objective
        }).then(() => {
            dispatch({ type: 'CREATE_NOTE', note})            
        }).catch((err) => {
            dispatch({ type: 'CREATE_NOTE_ERROR', err})
        })
    }
};
