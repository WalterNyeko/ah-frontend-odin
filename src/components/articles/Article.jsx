import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { strLimit } from 'utils/helpers';
import TagList from './TagList';
import ArticleFooter from './ArticleFooter';

const Article = ({ article }) => {
  const { title, body, slug } = article;

  return (
    <div className="card mb-3 article animated">
      <div className="card-body">
        <h3 className="card-title text-primary">{title}</h3>
        <p> {strLimit(body, 80)} </p>
        <div className="my-2">
          <NavLink to={`/articles/${slug}`}>Read more ...</NavLink>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-between tags">
          <TagList tags={article.tagList} />
        </div>
      </div>
      <div className="card-footer">
        <ArticleFooter article={article} />
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
