import React from 'react';
import { likingArticle } from 'store/actions/liking';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as thumbsUp } from '@fortawesome/free-solid-svg-icons';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      prevState => ({
        liked: !prevState.liked,
      }),
      () => {
        this.props.dispatch(likingArticle(this.props.article, this.state.liked));
      },
    );
  }

  render() {
    const label = this.state.liked ? thumbsUp : faThumbsUp;
    const styleColor = this.state.liked ? { color: '#23aa4e' } : '';
    return (
      <div className="customContainer">
        <FontAwesomeIcon
          icon={label}
          style={styleColor}
          onClick={this.handleClick}
          className="like"
        />
      </div>
    );
  }
}

LikeButton.propTypes = {
  article: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapActionsToProps = dispatch => ({ dispatch });

export default connect(
  null,
  mapActionsToProps,
)(LikeButton);

export { LikeButton as Liker };
