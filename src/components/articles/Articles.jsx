import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const Articles = ({ articles, user }) => (
  <div>
    {articles.map((article, index) => (
      <Article article={article} key={index} user={user} />
    ))}
  </div>
);

Articles.defaultProps = {
  user: null,
};

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
  user: PropTypes.shape(),
};

export default Articles;
