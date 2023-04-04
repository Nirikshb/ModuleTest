// // 1st used when the request is sent to fetch posts, 
// //2nd is used when the posts are successfully fetched
// //3rd is used when there's an error in fetching posts.
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

//  return which will be dispatched to the store by the application action.js
export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST });

//thunk function using async so as it return function argue
export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});
//if there's an error while fetching this will show it
export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});
// console.log("error");
export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsRequest());
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
    //     since we need id, title body and all we use using
    //    map which gives us array to print.
    const posts = data.map(({ id, title, body, userId }) => ({
      id,
      title,
      body,
      userId,
      imgSrc: `https://picsum.photos/200?random=${id}`,
      
    }));
    console.log(posts);
     // now that all the info through api i took 
//    we use dispatch and send it through catch method for errors
    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};




// export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
// export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
// export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

// 
// export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST });

// export const fetchPostsSuccess = (posts) => ({
//   type: FETCH_POSTS_SUCCESS,
//   payload: posts,
// });

// 
// export const fetchPostsFailure = (error) => ({
//   type: FETCH_POSTS_FAILURE,
//   payload: error,
 
// });

// 
// export const fetchPosts = () => async (dispatch) => {
//   dispatch(fetchPostsRequest());
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//  
//     const posts = data.map(({ id, title, body }) => ({
//       id,
//       title,
//       imgSrc: `https://picsum.photos/200?random=${id}`,
//     }));
//     

//     dispatch(fetchPostsSuccess(posts));
//   } catch (error) {
//     dispatch(fetchPostsFailure(error.message));
//   }
// };
