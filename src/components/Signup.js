import React from 'react';

class Signup extends React.Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Register</span>
        <div className="field">
          <input type="text" placeholder="Name" required />
        </div>
        <div className="field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Re-enter Password" required />
        </div>
        <div className="field">
          <button>Sign Up</button>
        </div>
      </form>
    );
  }
}

export default Signup;
