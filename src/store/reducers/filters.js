import types from 'store/types/filters';

const initialState = {
  results: [],
  title: '',
  error: null,
  all: {
    author: '',
    body: '',
    tag: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TITLE_FILTER:
      return { ...state, title: action.title };
    case types.UPDATE_FILTER_VALUE:
      return { ...state, all: { ...state.all, [action.name]: action.value } };
    case types.SET_RESULTS:
      return {
        ...state,
        results: action.results,
        error: action.results.length > 0 ? null : 'No results found',
      };
    case types.CLEAR_FILTERS:
      return { ...state, all: { author: '', body: '', tag: '' }, title: '' };
    default:
      return state;
  }
};
