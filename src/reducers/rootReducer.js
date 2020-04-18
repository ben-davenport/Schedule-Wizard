import { combineReducers } from 'redux';
import authReducer from './authReducer';
import siteModal from './siteModal';
import shiftReducer from './shiftReducer';
import availReducer from './availReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    siteModal: siteModal,
    shift: shiftReducer,
    availability: availReducer,
})

export default rootReducer;