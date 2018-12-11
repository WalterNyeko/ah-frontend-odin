import mockStore from 'tests/mockStore';
import types from 'store/types/articles';
import { addArticle, setArticles, getAllArticles } from 'store/actions/articles';

describe('Article action tests', () => {
  test('add article returns the right type', () => {
    expect(addArticle({})).toEqual(expect.objectContaining({ type: types.ADD_ARTICLE }));
  });

  test('setArticles returns the right type', () => {
    expect(setArticles([])).toEqual(expect.objectContaining({ type: types.SET_ARTICLES }));
  });

  test('it gets all articles', () => {
    const store = mockStore({ articles: { all: [] } });
    fetch.get('https://authors-haven-odin.herokuapp.com/api/articles', 200);
    const expectedActions = [{ type: types.SET_ARTICLES }];

    store.dispatch(getAllArticles()).then(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(expectedActions));
    });
  });
});
