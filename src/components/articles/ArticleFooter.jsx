import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import defaultUserImage from 'user.png';

const ArticleFooter = ({ article }) => {
  const { author, updated_at: updatedAt, read_time: readTime } = article;
  const ago = distanceInWordsToNow(updatedAt, { includeSeconds: true, addSuffix: ' ago' });

  return (
    <div className="d-flex align-items-center">
      <span>
        <img src={defaultUserImage} alt={`${author.username}`} className="author-avatar" />
      </span>
      <div className="ml-3 d-flex flex-wrap justify-content-between flex-grow-1">
        <h6>
          By{' '}
          <NavLink className="text-capitalize" to={`/users/${author.username}`}>
            <strong>{author.username}</strong>
          </NavLink>
        </h6>
        <h6 className="pl-2">
          Updated <strong className="font-italic">{ago}</strong>
        </h6>

        <h6>
          {readTime} <strong>read</strong>
        </h6>
      </div>
    </div>
  );
};

ArticleFooter.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticleFooter;
