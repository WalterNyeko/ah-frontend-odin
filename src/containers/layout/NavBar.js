import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Logo from 'logo.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showAuthModal, logoutUser } from 'store/actions/authentication';
import { mapStateToProps } from 'store/helpers';
import AuthLinks from 'components/authentication/AuthLinks';
import GuestLinks from 'components/authentication/GuestLinks';

const NavBar = ({ showModal, user, logout, history }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-2">
    <NavLink className="navbar-brand d-flex align-items-center" to="/">
      <img src={Logo} alt="Author Havens Logo" />
      <span className="h3 font-weight-bold  pl-1"> Authors Haven </span>
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/articles" className="nav-link">
            Articles
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        {user ? (
          <AuthLinks user={user} logout={() => logout(history)} />
        ) : (
          <GuestLinks showModal={showModal} />
        )}
      </ul>
    </div>
  </nav>
);

NavBar.defaultProps = {
  user: null,
};

NavBar.propTypes = {
  showModal: PropTypes.func.isRequired,
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export const mapActionsToProps = dispatch => ({
  showModal: name => dispatch(showAuthModal(name)),
  logout: history => dispatch(logoutUser(history)),
});

export { NavBar };

export default withRouter(
  connect(
    mapStateToProps({ user: 'authentication.user' }),
    mapActionsToProps,
  )(NavBar),
);
