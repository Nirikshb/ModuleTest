// import {
//     FETCH_POSTS_REQUEST,
//     FETCH_POSTS_FAILURE,
//   } from './actions';
//importing from action file 
import { FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
 } from "./Action";

 
  const initialState = {
    // loading:{}
    //posts:{}
    //intial state of postreducer loading false cause
    //we dont know anything about the api info 
    //setting post to an array so we can have data it in
    //without info we cant display an error message
    loading: false,
    posts: [],
    error: '',
  };
  //since state default is initialstate we set it that way and
  //action parameter that comes with a type property and a payload property
  const postReducer = (state = initialState, action) => {
    if (action.type === FETCH_POSTS_REQUEST) {
      return {
        ...state,
        loading: true,
      };
    } else if (action.type === FETCH_POSTS_SUCCESS) {
      return {
        loading: false,
        posts: action.payload,
        error: '',
      };
    } else if (action.type === FETCH_POSTS_FAILURE) {
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    } else {
      return state;
    }
  };
  
  //if the action type isnt recognized we simply return the state
  
  
  
  export default postReducer;