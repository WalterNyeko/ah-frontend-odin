import React from 'react';
import PropTypes from 'prop-types';
import BookMarkIcon from 'components/icons/Bookmark';

const BookMarkButton = ({ bookmarkHandler, slug, result }) => (
  <button
    className={`btn btn-link ${result ? 'BookMarkIcon' : 'UnBookMarkIcon'}`}
    type="button"
    onClick={() => bookmarkHandler(slug)}
  >
    <BookMarkIcon />
  </button>
);

BookMarkButton.propTypes = {
  bookmarkHandler: PropTypes.func,
  slug: PropTypes.any,
  result: PropTypes.any,
};

export default BookMarkButton;
