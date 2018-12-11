import React from 'react';
import PropTypes from 'prop-types';
import NavBarComponent from './NavBar';
import UILoader from './UILoader';

const DefaultLayout = ({ children, className }) => (
  <div className={className}>
    <UILoader />
    <NavBarComponent />
    <div className="main">{children}</div>
  </div>
);

DefaultLayout.defaultProps = {
  className: '',
};

DefaultLayout.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.any,
};

export default DefaultLayout;
