import React from 'react';
import PropTypes from 'prop-types';
import { Form, TextArea } from 'forms';

const slug = localStorage.getItem('slug');

const ReportArticleForm = ({ successSubmit }) => (
  <Form
    name="report-article-form"
    button={{ className: 'btn-primary btn-block', text: 'Report' }}
    action={`articles/${slug}/report/`}
    beforeSubmit={report => ({ report })}
    successSubmit={successSubmit}
  >
    <TextArea name="reason" rows={5} placeholder="Reason for reporting the article" />
  </Form>
);
ReportArticleForm.defaultProps = {
  successSubmit: null,
};

ReportArticleForm.propTypes = {
  successSubmit: PropTypes.func,
};

export default ReportArticleForm;
