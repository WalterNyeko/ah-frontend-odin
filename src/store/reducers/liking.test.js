import types from 'store/types/liking';
import likingReducer from 'store/reducers/liking';

describe('Liking Reducers', () => {
  test('LIKE ARTICLE', () => {
    const initialState = { article_like: '' };
    const newState = likingReducer(initialState, {
      type: types.LIKE_ARTICLE,
      article_like: undefined,
    });

    expect(newState).toEqual({ article_like: 'undefined' });
  });
  test('DISLIKE ARTICLE', () => {
    const initialState = { article_like: '' };
    const newState = likingReducer(initialState, {
      type: types.DISLIKE_ARTICLE,
      article_like: undefined,
    });

    expect(newState).toEqual({ article_like: 'undefined' });
  });
  test('should return initial state', () => {
    const initialState = { article_like: '' };

    expect(likingReducer(undefined, {})).toEqual(initialState);
  });
});
