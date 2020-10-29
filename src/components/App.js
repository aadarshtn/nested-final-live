import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, link, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { PostsList, Navbar } from './';

const Home = () => {
  return <div>Home</div>;
};

const Login = () => {
  return <div>Login</div>;
};

const Signup = () => {
  return <div>Signup</div>;
};

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
