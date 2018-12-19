import React from 'react';
import PropTypes from 'prop-types';
import TagList from './TagList';
import ArticleFooter from './ArticleFooter';
import RateArticle from '../../containers/RateArticle';

const Article = ({ article }) => {
  const { title, body } = article;

  return (
    <div className="card mb-3 article animated">
      <div className="card-body">
        <h3 className="card-title text-primary">{title}</h3>
        <p> {body} </p>
        <div className="d-flex flex-wrap align-items-center justify-content-between tags">
          <TagList tags={article.tagList} />
        </div>
      </div>
      <div className="card-footer">
        <ArticleFooter article={article} />
        <div className="float-right">
          <RateArticle rate={article.average_rating} slug={article.slug} />
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
