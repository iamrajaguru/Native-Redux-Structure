import { createStore, combineReducers, applyMiddleware} from 'redux'
import Thunk from 'redux-thunk';
import Login from './reducers/Login';

export default createStore(
    combineReducers({
        Login,
    }),
    applyMiddleware(Thunk)
);