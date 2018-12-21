import React from 'react';
import PropTypes from 'prop-types';
import TagList from './TagList';
import ArticleFooter from './ArticleFooter';
import Comments from './comments/Comments';

const Article = ({ article, user, addComment, bookmarkHandler, slug, result }) => {
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
        <ArticleFooter
          article={article}
          user={user}
          result={result}
          slug={slug}
          bookmarkHandler={bookmarkHandler}
        />
      </div>
      <Comments article={article} user={user} addComment={addComment} />
    </div>
  );
};

Article.defaultProps = {
  user: null,
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
  user: PropTypes.shape(),
  addComment: PropTypes.func.isRequired,
  bookmarkHandler: PropTypes.func,
  slug: PropTypes.any,
  result: PropTypes.any,
};

export default Article;
