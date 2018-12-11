import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const TagList = ({ tags }) => (
  <div>
    {tags.map(tag => (
      <NavLink
        to={`/articles/?tag=${tag}`}
        key={tag}
        className="badge badge-pill badge-primary h4 ml-1 px-3"
      >
        {tag}
      </NavLink>
    ))}
  </div>
);

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default TagList;
