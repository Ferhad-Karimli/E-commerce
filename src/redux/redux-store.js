import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
} from 'redux';

import products from './reducers/productsReducer';
import basket from './reducers/basketReducer'
import thunk from 'redux-thunk'

let reducers = combineReducers({
    productsInfo: products,
    basketInfo:basket
    
})

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = createStore(reducers, [], composeEnhancers(applyMiddleware(thunk)));

