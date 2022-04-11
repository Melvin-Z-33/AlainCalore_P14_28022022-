import UserReducer from './reducers/UserReducer';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
	key: 'root',
	storage,
};

const composeEnhancer =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const persistedReducer = persistReducer(persistConfig, UserReducer);

export default () => {
	const store = createStore(persistedReducer, composeEnhancer);

	const persistor = persistStore(store);
	return { store, persistor };
};
