import React from 'react';
import PropTypes from 'prop-types';
import TagList from './TagList';
import ArticleFooter from './ArticleFooter';
import Comments from './comments/Comments';
import RateArticle from '../../containers/RateArticle';

const Article = ({ article, user, addComment, bookmarkHandler, slug, result }) => {
  const { title, body } = article;

  return (
    <React.Fragment>
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
            result={result}
            slug={slug}
            bookmarkHandler={bookmarkHandler}
          />

          <div className="float-right">
            <RateArticle rate={article.average_rating} slug={article.slug} />
          </div>
        </div>
      </div>

      {/* comments */}
      <Comments article={article} user={user} addComment={addComment} />
    </React.Fragment>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
  user: PropTypes.object,
  addComment: PropTypes.func.isRequired,
  bookmarkHandler: PropTypes.func,
  slug: PropTypes.any,
  result: PropTypes.any,
};

export default Article;
