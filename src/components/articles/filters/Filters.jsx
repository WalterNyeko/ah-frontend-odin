import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';

const renderFilterInput = (name, updateSearchFilter, filters) => (
  <div key={name} className="form-group">
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">{capitalize(name)}</span>
      </div>
      <input
        type="text"
        className="form-control"
        value={filters[name]}
        onChange={e => updateSearchFilter(name, e.currentTarget.value)}
      />
    </div>
  </div>
);

const Filters = ({ updateSearchFilter, filters, filterSearchResults, clearFilters }) => {
  const labels = Object.keys(filters);
  const filterLength = Object.values(filters).filter(value => value).length;

  return (
    <form
      className="card"
      onSubmit={e => {
        e.preventDefault();
        filterSearchResults();
      }}
    >
      <div className="card-body">
        <div className="card-title d-flex justify-content-between">
          <h4>
            Filters <span className="badge badge-pill badge-primary"> {filterLength} </span>
          </h4>
          <button
            className="btn btn-outline-primary btn-sm"
            type="button"
            disabled={filterLength <= 0}
            onClick={clearFilters}
          >
            clear filters
          </button>
        </div>
        <hr />
        {labels.map(label => renderFilterInput(label, updateSearchFilter, filters))}
        <hr />
        <button className="btn btn-primary btn-block" disabled={filterLength <= 0}>
          Apply
        </button>
      </div>
    </form>
  );
};

Filters.propTypes = {
  filters: PropTypes.object.isRequired,
  updateSearchFilter: PropTypes.func.isRequired,
  filterSearchResults: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};

export default Filters;
