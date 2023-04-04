//importing react, connect and link which will connect each other.
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//giving the home two props loading and posts
//this is to check 
const Home = ({ loading, posts }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-container">
        {/* mapping cause we take the info from api
        so it can be displayed through posts */}
      {posts.map(({ id, title, body, imgSrc }) => (
        <div className="post" key={id}>
          <img src={imgSrc} alt={title} className="post-image" />
          <div className="content">
            {/* im setting the character limit to 0 to 100 using slice to cotain */}
            <h2 className="title">{title.slice(0, 100)}...</h2>
            <p className="post-body">{body.slice(0, 100)}...</p>
            {/* using link when we click on read more we go through routing */}
            <Link to={`/post/${id}`} className="read-more-link">Read More...</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

//so we create a function for redux store mapping giving two props home can use.
const mapStateToProps = ({ loading, posts }) => ({ loading, posts });

///the connnect() function is used to connect redux with  home passing map and home as arg.and exported at last
export default connect(mapStateToProps)(Home);
