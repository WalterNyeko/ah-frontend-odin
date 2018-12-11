import React from 'react';
import { dislikingArticle } from 'store/actions/liking';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown as thumbsDown } from '@fortawesome/free-solid-svg-icons';

class DislikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      disliked: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      prevState => ({
        disliked: !prevState.disliked,
      }),
      () => {
        this.props.dispatch(dislikingArticle(this.props.article, this.state.disliked));
      },
    );
  }

  render() {
    const label = this.state.disliked ? faThumbsDown : thumbsDown;
    const styleColor = this.state.disliked ? '' : { color: 'red' };
    return (
      <div className="customContainer">
        <FontAwesomeIcon
          icon={label}
          style={styleColor}
          onClick={this.handleClick}
          className="dislike"
        />
      </div>
    );
  }
}

DislikeButton.propTypes = {
  article: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapActionsToProps = dispatch => ({ dispatch });

export default connect(
  null,
  mapActionsToProps,
)(DislikeButton);

export { DislikeButton as Disliker };
