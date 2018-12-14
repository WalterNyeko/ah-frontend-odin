import types from 'store/types/articles';

const initialState = { all: [], single: null };

const addArticle = (state, article) => {
  const articles = state.all;
  articles.unshift(article);
  return { ...state, all: [...articles] };
};

export default (state = initialState, payload) => {
  switch (payload.type) {
    case types.ADD_ARTICLE:
      return addArticle(state, payload.article);
    case types.SET_SINGLE:
      return { ...state, single: payload.article };
    case types.SET_ARTICLES:
      return { ...state, all: payload.articles };
    default:
      return state;
  }
};
