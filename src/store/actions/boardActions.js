export const createBoard = (board) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("boards")
      .add({
        name: board.name,
        description: board.description,
        boardId: '',
        AuthorFirstName: profile.firstname,
        AuthorLastName: profile.lastname,
        authorId: authorId,
        createdAt: new Date(),
        lastEdited: new Date(),
      })
      .then((docRef) => {
        firestore
          .collection("boards")
          .doc(docRef.id)
          .update({ boardId: docRef.id });
          dispatch({ type: "CREATE_BOARD", docRef });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_BOARD_ERROR", err });
      });
  };
};

export const deleteBoard = (board) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection("boards").doc(board.boardId).delete()
      .then(() => {
        dispatch({ type: "DELETE_BOARD", board });
      })
      .then(() => {
        firestore.collection("boards").doc(board.boardId).collection("sections").get()
          .then((snapshot) => {
            snapshot.forEach((section) => {
              // console.log('sec', section.id)
              firestore.collection("sections").doc(section.id).delete();
            });
          });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_BOARD_ERROR", err });
      });
  };
};

export const editBoard = (board) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection("boards").doc(board.boardId).update({
      name: board.name,
      description: board.description,
      lastEdited: new Date(),
    })
      .then(() => {
        dispatch({ type: "EDIT_BOARD", board });
      })
      .then(() => {
        firestore.collection("boards").doc(board.boardId).collection("sections").get()
          .then((snapshot) => {
            snapshot.forEach((section) => {
              // console.log('sec', section.id)
              firestore.collection("sections").doc(section.id).update({
                name: board.name,
                description: board.description,
                lastEdited: new Date(),
              });
            });
          });
      })
      .catch((err) => {
        dispatch({ type: "EDIT_BOARD_ERROR", err });
      });
  };
};
