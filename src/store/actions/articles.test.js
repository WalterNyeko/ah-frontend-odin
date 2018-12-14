import mockStore from 'tests/mockStore';
import types from 'store/types/articles';
import { prepareUrl } from 'utils/helpers';

import {
  addArticle,
  setArticles,
  getAllArticles,
  setSingle,
  fetchArticleBySlug,
} from 'store/actions/articles';

describe('Article action tests', () => {
  test('add article returns the right type', () => {
    expect(addArticle({})).toEqual(expect.objectContaining({ type: types.ADD_ARTICLE }));
  });

  test('setArticles returns the right type', () => {
    expect(setArticles([])).toEqual(expect.objectContaining({ type: types.SET_ARTICLES }));
  });

  test('fetchArticleBySlug sets a single article after fetching it', () => {
    fetch.get(prepareUrl('articles/some-slug'), []);
    const store = mockStore({ articles: { all: [] } });

    store.dispatch(fetchArticleBySlug('some-slug')).then(() => {
      expect(store.getActions()).toEqual([{ type: types.SET_SINGLE, article: [] }]);
    });
  });

  test('setSingle returns the right type', () => {
    const article = {};

    expect(setSingle(article)).toEqual(
      expect.objectContaining({ type: types.SET_SINGLE, article }),
    );
  });
  test('getAllArticles dispatches the right type', () => {
    const articles = [{ updated_at: '2018-12-14' }, { updated_at: '2018-12-01' }];
    const store = mockStore({ articles: { all: [] } });
    const expectedActions = [{ type: types.SET_ARTICLES, articles }];
    fetch.restore();
    fetch.get(prepareUrl('articles'), { body: { article: articles } });

    store.dispatch(getAllArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      fetch.restore();
    });
  });
});
