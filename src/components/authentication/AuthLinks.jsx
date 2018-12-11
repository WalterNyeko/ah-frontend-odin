import React from 'react';
import PropTypes from 'prop-types';
import defaultUserImage from 'user.png';

const AuthLinks = ({ user, logout }) => (
  <React.Fragment>
    <li className="nav-item d-flex align-items-center justify-content-between">
      <div className="bg-white  rounded rounded-circle">
        <img src={defaultUserImage} alt={user.username} className="user-avatar" />
      </div>
      <h4 className="text-white ml-2">{user.username}</h4>
    </li>
    <li className="nav-item">
      <button className="nav-link text-light btn-link" onClick={logout}>
        Logout
      </button>
    </li>
  </React.Fragment>
);

AuthLinks.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default AuthLinks;
