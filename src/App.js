import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './Components/Action';
import Home from './Components/Home';
import Post from './Components/Post';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/item/:id', element: <Post /> }
];

//  dispatch an action to fetch posts
const App = () => {
  const dispatch = useDispatch();
//   store updates upon called as its state based
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;


// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import Home from './Components/Home';

// const routes = [
//   { path: '/', exact: true, component: Home },
//   { path: '/post/:id', component: Post }
// ];

// const App = () => {
//   const dispatch = useDispatch();

//   return (
//     <Router>

//       {routes.map((route, index) => (
//   <Route
//     key={index}
//     path={route.path}
//     element={<route.component />}
//   />
// ))}

//     </Router>
//   );
// };

// export default App;