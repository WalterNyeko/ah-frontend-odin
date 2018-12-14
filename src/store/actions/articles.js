import types from 'store/types/articles';

export const addArticle = article => ({ type: types.ADD_ARTICLE, article });

export const setArticles = articles => ({ type: types.SET_ARTICLES, articles });

export const setSingle = article => ({ type: types.SET_SINGLE, article });

export const fetchArticleBySlug = slug => (dispatch, getState, http) =>
  http.get(`articles/${slug}`).then(article => dispatch(setSingle(article)));

export const getAllArticles = () => (dispatch, getState, http) =>
  http.get('/articles').then(({ article }) => {
    const toDate = ({ updated_at: updatedAt }) => new Date(updatedAt);
    // sort articles by updated_at
    const articles = article.sort((a, b) => toDate(b) - toDate(a));

    return dispatch(setArticles(articles));
  });
