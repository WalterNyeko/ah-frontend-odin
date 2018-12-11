import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showAuthModal } from 'store/actions/authentication';

const JoinPlatiformSection = ({ showSignUpModal }) => (
  <section className="p-3 bg-primary text-white">
    <div className="container-fluid">
      <h3>Join Authors Haven</h3>
      <p className="mt-3">
        A Social platform for like-minded authors to foster inspiration and innovation by leveraging
        the modern web to enable authors share original content, target articles to an audience that
        finds them relevant and more.
      </p>
      <div className="d-flex justify-content-end">
        <button className="btn join-button" onClick={showSignUpModal} type="submit">
          SignUp
        </button>
      </div>
    </div>
  </section>
);

JoinPlatiformSection.propTypes = {
  showSignUpModal: PropTypes.func.isRequired,
};

export const mapActionsToProps = dispatch => ({
  showSignUpModal: () => dispatch(showAuthModal('signup')),
});

export { JoinPlatiformSection };

export default connect(
  null,
  mapActionsToProps,
)(JoinPlatiformSection);
