import React from 'react';
import PropTypes from 'prop-types';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TagList from './TagList';
import ArticleFooter from './ArticleFooter';
import Comments from './comments/Comments';

const Article = ({ article, user, addComment, bookmarkHandler, slug, result }) => {
  const { title, body } = article;
  const url = `https://ah-frontend-odin-staging.herokuapp.com/articles/${article.slug}`;

  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content">
        <div className="social-sec">
          <h4>Share on:</h4>
          <FacebookShareButton url={url} quote={title}>
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="social animated"
              size="3x"
              style={{ color: '#3b5998' }}
            />
          </FacebookShareButton>
          <TwitterShareButton url={url} title={title} via="AuthorsHaven">
            <FontAwesomeIcon
              icon={faTwitterSquare}
              className="social animated"
              size="3x"
              style={{ color: '#38A1F3' }}
            />
          </TwitterShareButton>
          <EmailShareButton
            body={`${title} Link to: ${url} Shared Via: Authors Haven `}
            subject={title}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="social animated"
              size="3x"
              style={{ color: 'red' }}
            />
          </EmailShareButton>
        </div>
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
          <h3>Comments</h3>
          <Comments article={article} user={user} addComment={addComment} />
        </div>
      </div>
    </React.Fragment>
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
