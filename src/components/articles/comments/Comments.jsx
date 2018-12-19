import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import NewComment from './NewComment';

const renderComment = (comment, index) => <Comment comment={comment} key={index} />;

const Comments = ({ article, user, addComment }) => (
  <div className="card mt-2">
    <div className="card-body">{article.comments.map(renderComment)}</div>
    <div className="card-footer">
      <NewComment user={user} addComment={addComment} article={article} />
    </div>
  </div>
);

Comments.propTypes = {
  article: PropTypes.shape({ comments: PropTypes.array }),
  user: PropTypes.object,
  addComment: PropTypes.func.isRequired,
};

export default Comments;
