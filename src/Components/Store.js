import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './postReducer';

//we need middle wear as we're getting async info
//via middleware thunk returns a function instead of object
const middleware = [thunk];

//store method givem by redux library
const store = createStore(
  postReducer,
  applyMiddleware(...middleware)
  //to update we use middleware function that dispatches to the store. 
);

export default store;
