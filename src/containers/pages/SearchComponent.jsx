import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { mapStateToProps } from 'store/helpers';
import DefaultLayout from 'containers/layout/DefaultLayout';
import Filters from 'components/articles/filters/Filters';
import { updateFilterValue, filterResults, clearSearchFilters } from 'store/actions/filters';
import Articles from 'components/articles/Articles';

const SearchComponent = ({
  filters,
  updateSearchFilter,
  filterSearchResults,
  results,
  error,
  clearFilters,
}) => {
  const showResults = error || results.length > 0;
  return (
    <DefaultLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Filters
              filters={filters}
              updateSearchFilter={updateSearchFilter}
              filterSearchResults={filterSearchResults}
              clearFilters={clearFilters}
            />
          </div>
          <div className="col-md-9">
            <div className={classNames({ card: showResults })}>
              {showResults && (
                <div className="card-header bg-white">
                  <h3 className="text-center">Search Results</h3>
                </div>
              )}
              {error && <div className="alert alert-info">{error}</div>}
              <Articles articles={results} />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
SearchComponent.propTypes = {
  filters: PropTypes.object.isRequired,
  updateSearchFilter: PropTypes.func.isRequired,
  filterSearchResults: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired,
  error: PropTypes.string,
  clearFilters: PropTypes.func.isRequired,
};

export const mapDispatchToProps = dispatch => ({
  updateSearchFilter: (name, value) => dispatch(updateFilterValue(name, value)),
  filterSearchResults: () => dispatch(filterResults()),
  clearFilters: () => dispatch(clearSearchFilters()),
});

export { SearchComponent };
export default connect(
  mapStateToProps({ filters: 'filters.all', results: 'filters.results', error: 'filters.error' }),
  mapDispatchToProps,
)(SearchComponent);
