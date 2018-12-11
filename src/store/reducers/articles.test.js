import articleReducer from 'store/reducers/article';
import types from 'store/types/articles';
import Factory from 'tests/factory';

let initialState;
let articles;

describe('Article reducer', () => {
  beforeEach(() => {
    initialState = { all: [] };
    articles = [{ title: 'Some title' }, { title: 'some other titles' }];
  });

  test('It sets all articles', () => {
    const newState = articleReducer(initialState, { type: types.SET_ARTICLES, articles });

    expect(newState.all).toHaveLength(2);
  });

  test('It adds a new article', () => {
    const newState = articleReducer(initialState, {
      type: types.ADD_ARTICLE,
      article: { title: 'Hey' },
    });

    expect(newState.all).toHaveLength(1);
  });

  test('SET_SINGLE sets a single article', () => {
    const initial = { single: null };
    const article = Factory.of('article').make();

    const newState = articleReducer(initial, {
      type: types.SET_SINGLE,
      article,
    });

    expect(newState.single).toEqual(article);
  });
});
