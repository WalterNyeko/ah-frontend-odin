import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, TagInput } from 'forms';

import TextArea from 'forms/TextArea';

const ArticleForm = ({ title, successSubmit }) => (
  <div>
    <h3 className="card-title text-center">{title}</h3>
    <Form
      button="Publish Article"
      name="create-article-form"
      action="/articles"
      beforeSubmit={article => ({
        article: {
          ...article,
          description: 'Default description',
          published: true,
        },
      })}
      successSubmit={successSubmit}
    >
      <Input name="title" placeholder="Title" />
      <TextArea name="body" placeholder="Tell your story" rows="3" />
      <hr />
      <TagInput name="tagList" />
    </Form>
  </div>
);

ArticleForm.propTypes = {
  title: PropTypes.string.isRequired,
  successSubmit: PropTypes.func.isRequired,
};

export default ArticleForm;
