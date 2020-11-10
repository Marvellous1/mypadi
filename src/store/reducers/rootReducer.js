import authReducer from './authReducer'
import boardReducer from './boardReducer'
import journalReducer from './journalReducer'
import { combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    board: boardReducer,
    journal: journalReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer