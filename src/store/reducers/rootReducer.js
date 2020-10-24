import authReducer from './authReducer'
import boardReducer from './boardReducer'
import sectionReducer from './sectionReducer'
import { combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    board: boardReducer,
    section: sectionReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer