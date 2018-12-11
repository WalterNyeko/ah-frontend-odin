import React from 'react';
import PropTypes from 'prop-types';

const GuestLinks = ({ showModal }) => (
  <React.Fragment>
    <li className="nav-item">
      <button
        className="nav-link text-light btn-link"
        onClick={() => showModal('login')}
        data-id="login"
      >
        login
      </button>
    </li>
    <li className="nav-item">
      <button
        className="nav-link text-light btn-link"
        onClick={() => showModal('signup')}
        data-id="signup"
      >
        Register
      </button>
    </li>
  </React.Fragment>
);

GuestLinks.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default GuestLinks;
