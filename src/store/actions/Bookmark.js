import types from 'store/types/articles';

const bookMarkAction = slug => (dispatch, _getState, http) =>
  http
    .withAuthentication()
    .post(`articles/${slug}/bookmark`)
    .then(data => {
      dispatch({ type: types.ADD_BOOKMARK, payload: data });
    });

export default bookMarkAction;
