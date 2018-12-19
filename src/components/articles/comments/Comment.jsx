import React from 'react';
import PropTypes from 'prop-types';
import defaultUserImage from 'user.png';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

const Comment = ({ comment }) => {
  const { author = {} } = comment;
  const ago = distanceInWordsToNow(comment.updatedAt, { includeSeconds: true, addSuffix: ' ago' });

  return (
    <div className="d-flex mb-3 animated fadeIn">
      <div className="mr-3  d-none d-md-block">
        <img src={author.image || defaultUserImage} alt={author.username} className="user-avatar" />
      </div>
      <div>
        <h6>
          <strong> {author.username} </strong>
          <small>posted {ago} </small>
        </h6>
        <p>{comment.body}</p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({ body: PropTypes.string }).isRequired,
};

export default Comment;
