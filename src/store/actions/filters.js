import types from 'store/types/filters';
import { filterArticlesUrl } from 'utils/articles';

export const updateTitleFilter = title => ({ type: types.UPDATE_TITLE_FILTER, title });

export const setResults = results => ({ type: types.SET_RESULTS, results });

export const updateFilterValue = (name, value) => ({
  type: types.UPDATE_FILTER_VALUE,
  name,
  value,
});

export const clearSearchFilters = () => ({ type: types.CLEAR_FILTERS });

export const filterResults = () => (dispatch, getState, http) =>
  http.get(filterArticlesUrl(getState().filters)).then(({ article }) => {
    dispatch(setResults(article.results));
  });
