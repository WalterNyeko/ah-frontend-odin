import React from 'react';
import PropTypes from 'prop-types';
import defaultUserImage from 'user.png';
import CommentForm from './CommentForm';

const NewComment = ({ user, article, addComment }) =>
  user ? (
    <div className="">
      <div className="d-flex">
        <div className="mr-3  d-none d-md-block">
          <img
            src={user.image || defaultUserImage}
            alt="authenticated user"
            className="user-avatar"
          />
        </div>
        <CommentForm addComment={addComment} article={article} />
      </div>
    </div>
  ) : null;

NewComment.propTypes = {
  user: PropTypes.object,
  article: PropTypes.object,
  addComment: PropTypes.func.isRequired,
};

export default NewComment;
