import React from 'react';
import Articles from 'components/Articles';
import PropTypes from 'prop-types';

const LatestArticlesSection = ({ articles }) => (
  <section className="p-3 bg-white">
    <div className="container">
      <Articles articles={articles} />
    </div>
  </section>
);

LatestArticlesSection.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default LatestArticlesSection;
