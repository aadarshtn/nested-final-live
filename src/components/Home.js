import React from 'react';
import PostsList from './PostsList';

class Home extends React.Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="home">
        <PostsList posts={posts} />
      </div>
    );
  }
}

export default Home;
