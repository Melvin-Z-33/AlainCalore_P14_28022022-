import UserReducer from './reducers/UserReducer';
import { createStore } from 'redux';

//const rootReducer = combineReducers({ userReducer });
const store = createStore(
	UserReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
