import React from 'react';
import PropTypes from 'prop-types';
import IconSearch from 'components/icons/IconSearch';

const Filters = ({ match, updateSearchTitle, titleQuery, filterSearchResults }) => {
  const titleQueryLength = String(titleQuery).length;
  const disabledButton = titleQueryLength < 2;
  const isSearching = match.path === '/search';

  return (
    <form
      className="form-inline my-2 ml-auto"
      method="post"
      onSubmit={e => {
        e.preventDefault();
        filterSearchResults(titleQuery);
      }}
    >
      {isSearching ? (
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="filter by title ..."
            aria-describedby="Filter articles"
            value={titleQuery}
            onChange={e => updateSearchTitle(e.currentTarget.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-accent text-white" type="submit" disabled={disabledButton}>
              <IconSearch />
            </button>
          </div>
        </div>
      ) : null}
    </form>
  );
};

Filters.propTypes = {
  match: PropTypes.object.isRequired,
  titleQuery: PropTypes.string,
  updateSearchTitle: PropTypes.func.isRequired,
  filterSearchResults: PropTypes.func.isRequired,
};

export default Filters;
