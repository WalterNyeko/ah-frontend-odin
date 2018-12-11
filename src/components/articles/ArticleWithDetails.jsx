import React from 'react';
import PropTypes from 'prop-types';
import TagList from './TagList';
import ArticleFooter from './ArticleFooter';

const Article = ({ article, user }) => {
  const { title, body } = article;
  console.log(user);

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
        <ArticleFooter article={article} user={user} />
      </div>
    </div>
  );
};

Article.defaultProps = {
  user: null,
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
  user: PropTypes.shape(),
};

export default Article;
