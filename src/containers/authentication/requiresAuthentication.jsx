import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps } from 'store/helpers';

export default Component => {
  const requiresAuthentication = props => {
    const { user, history } = props;
    return user ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/unauthorized',
          state: { from: history.location },
        }}
      />
    );
  };

  return connect(mapStateToProps({ user: 'authentication.user' }))(
    withRouter(requiresAuthentication),
  );
};
