import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({auth:authReducer})

const middleware = [thunk]
const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))



export default Store