import { createStore,applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import {persistStore} from 'redux-persist'
import thunk from 'redux-thunk';
import rootReducer from './rootreducer';
var middleware= [thunk]
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)))
export const persistor = persistStore(store) //config for redux-presist
export default store
//BUG: