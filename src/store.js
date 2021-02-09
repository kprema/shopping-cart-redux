import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {productReducer} from './reducers/productReducer';

const initialState = {};
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(
  combineReducers({
    products: productReducer,
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
