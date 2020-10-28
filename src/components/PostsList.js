import React from 'react';
import PropTypes from 'prop-types';

class PostsList extends React.Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-pic"
                />
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>
              <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/1000/1000621.svg"
                    alt="like-icon"
                  />
                  {/* <span>{post.likes.length}</span> */}
                  <span>55</span>
                </div>
                <div className="post-comments-icon">
                  <img
                    src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                    alt="comment-icon"
                  />
                  {/* <span>{post.comments.length}</span> */}
                  <span>1</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input placeholder="Start Typing A Comment" />
              </div>
              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">Bill</span>
                    <span className="post-comment-time">a second ago</span>
                    <span className="post-comment-likes">12</span>
                  </div>
                  <div className="post-comment-content">
                    Some Random Hardcoded Comment!
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostsList;
