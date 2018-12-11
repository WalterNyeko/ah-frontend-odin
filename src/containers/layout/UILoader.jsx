import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconLoader from 'components/icons/Loader';
import { mapStateToProps } from 'store/helpers';

const Loader = ({ loading }) =>
  loading ? (
    <div className="ui-loader">
      <IconLoader />
    </div>
  ) : null;

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export { Loader };

export default connect(mapStateToProps({ loading: 'ui.loading' }))(Loader);
