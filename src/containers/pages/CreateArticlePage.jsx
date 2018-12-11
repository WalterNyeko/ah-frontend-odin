import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from 'containers/layout/DefaultLayout';
import ArticleForm from 'components/articles/ArticleForm';
import requiresAuthentication from 'containers/authentication/requiresAuthentication';

const NewArticle = ({ history }) => (
  <DefaultLayout>
    <div className="container col-md-7 max-auto">
      <ArticleForm
        title="Create a new  Article"
        successSubmit={() => {
          window.Notify.success('Article was added successfully');
          history.push('/articles');
        }}
      />
    </div>
  </DefaultLayout>
);

NewArticle.propTypes = {
  history: PropTypes.object.isRequired,
};

export default requiresAuthentication(NewArticle);
