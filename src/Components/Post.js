import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//using 3 props inside post 
const Post = ({ loading, post, match }) => {
  // if loadin is true or !post loading
    if (loading || !post) {
      return <p>Loading...</p>;
    }
  
    const { title, body, userId, imgSrc } = post;
    const { params: { id } } = match;
  //now for printing the data
    return (
      <div className="container">
        <img className="img" src={imgSrc} alt={title} />
        <div className="text">
          <h2 className="title">`$(Title : {title})`</h2>
          <p className="body">Body : {body}</p>
          <Link className="read" to={`/post/${id}`}>Read More</Link>
        </div>
      </div>
    );
  };

  // map the state from the Redux store like previously
const mapStateToProps = ({ loading, posts }, { match }) => {
     const postId = parseInt(match.params.id);
  //we do parseint with match cause we need the postId /post/:id
  const post = posts.find(({ id }) => id === postId);

  return { loading, post, match };
};

export default connect(mapStateToProps)(Post);
