import React from 'react';
import PropTypes from 'prop-types';
import { Form, TextArea } from 'forms';
import { commentUrl } from 'utils/articles';

const CommentForm = ({ article, addComment }) => (
  <Form
    name="comment-form"
    button="comment"
    action={commentUrl(article)}
    beforeSubmit={comment => ({ comment })}
    successSubmit={({ Comment }) => addComment(Comment)}
  >
    <TextArea name="body" rows={1} placeholder="Add your comment here" />
  </Form>
);

CommentForm.propTypes = {
  article: PropTypes.object,
  addComment: PropTypes.func.isRequired,
};

export default CommentForm;
