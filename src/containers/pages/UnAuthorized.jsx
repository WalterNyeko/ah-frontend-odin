import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { mapStateToProps } from 'store/helpers';
import DefaultLayout from 'containers/layout/DefaultLayout';

const UnAuthorized = ({ user }) =>
  user ? (
    // redirect if the user logs in
    <Redirect to="/" />
  ) : (
    <DefaultLayout>
      <div className="container">
        <h2 className="text-center">You are unauthorized to see this page</h2>
      </div>
    </DefaultLayout>
  );
UnAuthorized.defaultProps = {
  user: null,
};

UnAuthorized.propTypes = {
  user: PropTypes.any,
};

export { UnAuthorized };

export default connect(mapStateToProps({ user: 'authentication.user' }))(UnAuthorized);
