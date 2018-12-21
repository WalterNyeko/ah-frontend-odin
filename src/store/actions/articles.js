import types from 'store/types/articles';
import { sortByUpdatedAt } from 'store/helpers';
import { commentUrl } from 'utils/articles';

export const addArticle = article => ({ type: types.ADD_ARTICLE, article });

export const setArticles = articles => ({ type: types.SET_ARTICLES, articles });

export const setSingle = article => ({ type: types.SET_SINGLE, article });

export const addComment = comment => ({ type: types.ADD_COMMENT, comment });

export const setComments = comments => ({ type: types.SET_COMMENTS, comments });

export const fetchArticleBySlug = slug => (dispatch, getState, http) =>
  http.get(`articles/${slug}`).then(article => dispatch(setSingle(article)));

export const getAllArticles = () => (dispatch, getState, http) =>
  http.get('/articles').then(({ article }) => {
    const toDate = ({ updated_at: updatedAt }) => new Date(updatedAt);
    // sort articles by updated_at
    const articles = article.sort((a, b) => toDate(b) - toDate(a));

    return dispatch(setArticles(articles));
  });
export const rateArticle = (slug, ratebody) => (dispatch, getState, http) => {
  return http
    .withAuthentication()
    .post(`/articles/${slug}/ratings/`, ratebody)
    .then(data => {
      dispatch({ type: types.RATE_ARTICLE, mydata: data });
      if (data.id) {
        window.Notify.success('You have successfully rated this article');
        dispatch(fetchArticleBySlug(slug));
      }
    })
    .catch(error => {
      console.log(error);
      if (error.errors !== undefined) {
        window.Notify.error(error.errors.error[0]);
      } else {
        window.Notify.error(error.message);
      }
    });
};
