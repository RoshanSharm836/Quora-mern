import logger from 'redux-logger';
import thunk from 'redux-thunk';
import answerReducer from './Redux/Answer/answerReducer';
import { reducer } from './Component/Home/redux/reducer';
import { combineReducers,legacy_createStore,applyMiddleware } from "redux";
const combinedReducer = combineReducers({
    questions: answerReducer,
    post: reducer
})

const Store = legacy_createStore(combinedReducer, applyMiddleware(logger, thunk));

export default Store;
