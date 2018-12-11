import types from 'store/types/liking';

const initialState = { article_like: '' };

const likingReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case types.LIKE_ARTICLE:
      return { ...state, article_like: state.article_like.concat(payload.like) };
    case types.DISLIKE_ARTICLE:
      return { ...state, article_like: state.article_like.concat(payload.like) };
    default:
      return state;
  }
};

export default likingReducer;
