import UserReducer from './reducers/UserReducer';
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { rrtableReducer } from 'react-redux-table';
const persistConfig = {
	key: 'root',
	storage,
};

const rrtable = rrtableReducer;

// export const rootReducer = combineReducers({
// 	UserReducer: UserReducer,
// 	rrtable: rrtableReducer,
// });

const composeEnhancer =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const persistedReducer = persistReducer(persistConfig, UserReducer);

export default () => {
	const store = createStore(persistedReducer, composeEnhancer);

	const persistor = persistStore(store);
	return { store, persistor };
};
// **! OK
//const rootReducer = combineReducers({ userReducer });
// const store = createStore(
// 	UserReducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// const persistore = persistStore(store);
// export default { persistore, store };
