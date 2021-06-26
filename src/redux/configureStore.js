import { createStore } from 'redux';
import { reducer } from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = () => {
    const store = createStore(
        reducer,
        { thunk, logger }
    );
    return store;

}