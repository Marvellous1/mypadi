export const createSection = (section) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const sections = `boards/${section.BoardID}/sections`
        firestore.collection(sections).add({
            title : section.title,
            objective : section.objective,
            createdAt: new Date()
        }).then((docRef) => {
            firestore.collection('sections').doc(docRef.id).set({ BoardId: section.BoardID})
        }).then((docRef) => {
            firestore.collection(sections).doc(docRef.id).update({ sectionId: docRef.id})
        }).then(() => {
            firestore.collection('boards').doc(section.BoardID).update({ lastEdited: new Date()})
        }).then(() => {
            dispatch({ type: 'CREATE_SECTION', section})            
        }).catch((err) => {
            dispatch({ type: 'CREATE_SECTION_ERROR', err})
        })
    }
};

export const deleteSection = (section) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const sections = `boards/${section.BoardID}/sections`
        firestore.collection('sections').doc(section.id).delete()
        .then(() =>{
            firestore.collection(sections).doc(section.id).delete()
        }).then(() => {
            dispatch({ type: 'DELETE_SECTION', section})            
        }).catch((err) => {
            dispatch({ type: 'DELETE_SECTION_ERROR', err})
        })
    }
};

export const editSection = (section) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const sections = `boards/${section.BoardID}/sections`
        firestore.collection(sections).doc(section.id).update({
            title: section.title,
            objective: section.objective
        }).then(() => {
            dispatch({ type: 'CREATE_SECTION', section})            
        }).catch((err) => {
            dispatch({ type: 'CREATE_SECTION_ERROR', err})
        })
    }
};
