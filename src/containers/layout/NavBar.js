import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Logo from 'logo.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showAuthModal, logoutUser } from 'store/actions/authentication';
import { updateTitleFilter, filterResults } from 'store/actions/filters';
import { mapStateToProps } from 'store/helpers';
import AuthLinks from 'components/authentication/AuthLinks';
import GuestLinks from 'components/authentication/GuestLinks';
import ArticleFilters from 'components/articles/filters';
import IconSearch from 'components/icons/IconSearch';

const NavBar = ({
  showModal,
  user,
  logout,
  history,
  match,
  updateSearchTitle,
  filterSearchResults,
  titleQuery,
}) => (
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
        <li className="nav-item" />
      </ul>
      <ArticleFilters
        match={match}
        updateSearchTitle={updateSearchTitle}
        filterSearchResults={filterSearchResults}
        titleQuery={titleQuery}
      />
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/search" className="nav-link">
            <i className="nav-link-icon">{match.path === '/search' ? null : <IconSearch />}</i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles" className="nav-link">
            Articles
          </NavLink>
        </li>
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
  match: PropTypes.object.isRequired,
  titleQuery: PropTypes.string,
  updateSearchTitle: PropTypes.func.isRequired,
  filterSearchResults: PropTypes.func.isRequired,
};

export const mapActionsToProps = dispatch => ({
  showModal: name => dispatch(showAuthModal(name)),
  logout: history => dispatch(logoutUser(history)),
  updateSearchTitle: title => dispatch(updateTitleFilter(title)),
  filterSearchResults: () => dispatch(filterResults()),
});

export { NavBar };

export default withRouter(
  connect(
    mapStateToProps({ user: 'authentication.user', titleQuery: 'filters.title' }),
    mapActionsToProps,
  )(NavBar),
);
