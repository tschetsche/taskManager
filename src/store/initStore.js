import { createStore } from 'redux';
import cardListReducer from './reducers/rootReducer';

const store = createStore(cardListReducer, undefined);

export default store;
