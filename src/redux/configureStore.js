import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


export const configureStore = () => {
    const store = createStore(
        persistedReducer,
        applyMiddleware(thunk, logger))
    let persistor = persistStore(store)
    return { store, persistor };
}