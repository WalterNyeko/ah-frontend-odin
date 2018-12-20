import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from 'containers/layout/DefaultLayout';
import ReportArticleForm from 'components/articles/report/ReportForm';
import requiresAuthentication from 'containers/authentication/requiresAuthentication';

const ReportArticle = ({ history, article, reportArticle }) => (
  <DefaultLayout>
    <div className="container col-md-7 max-auto">
      <ReportArticleForm
        reportArticle={reportArticle}
        article={article}
        title="Report Article"
        successSubmit={() => {
          window.Notify.success('Article has been report has been filed.');
          history.push('/articles');
        }}
      />
    </div>
  </DefaultLayout>
);

ReportArticle.defaultProps = {
  reportArticle: null,
  article: null,
};

ReportArticle.propTypes = {
  history: PropTypes.object.isRequired,
  article: PropTypes.object,
  reportArticle: PropTypes.func,
};

export default requiresAuthentication(ReportArticle);
