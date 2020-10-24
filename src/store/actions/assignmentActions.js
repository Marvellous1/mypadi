export const createAssignment = (assignment) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('sections').doc(assignment.Sid).collection('assignments').add({
            ...assignment,
            createdAt: new Date()
        }).then((docRef) => {
            firestore.collection(assignment.Sid).doc(docRef.id).update({ assignmentId: docRef.id})
        }).then(() => {
            dispatch({ type: 'CREATE_ASSIGNMENT', assignment})            
        }).catch((err) => {
            dispatch({ type: 'CREATE_ASSIGNMENT_ERROR', err})
        })
    }
};

export const deleteAssignment = (assignment) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('sections').doc(assignment.Sid).collection('assignments'
        ).doc(assignment.id).delete().then(() => {
            dispatch({ type: 'DELETE_ASSIGNMENT', assignment})            
        }).catch((err) => {
            dispatch({ type: 'DELETE_ASSIGNMENT_ERROR', err})
        })
    }
};


export const editAssignment = (assignment) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('sections').doc(assignment.Sid).collection('assignments'
        ).doc(assignment.id).update({
            title: assignment.title,
            objective: assignment.objective
        }).then(() => {
            dispatch({ type: 'CREATE_ASSIGNMENT', assignment})            
        }).catch((err) => {
            dispatch({ type: 'CREATE_ASSIGNMENT_ERROR', err})
        })
    }
};