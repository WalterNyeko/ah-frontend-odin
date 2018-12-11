import types from 'store/types/liking';
import { getAllArticles } from 'store/actions/articles';

export const likingArticle = (article, like) => (dispatch, getState, http) =>
  http
    .withAuthentication()
    .post(`articles/${article.slug}/likes`, { article: { article_like: like } })
    .then(data => {
      dispatch({ type: types.LIKE_ARTICLE, payload: data });
      dispatch(getAllArticles());
    });

export const dislikingArticle = (article, dislike) => (dispatch, getState, http) =>
  http
    .withAuthentication()
    .post(`articles/${article.slug}/likes`, { article: { article_like: dislike } })
    .then(data => {
      dispatch({ type: types.DISLIKE_ARTICLE, payload: data });
      dispatch(getAllArticles());
    });
