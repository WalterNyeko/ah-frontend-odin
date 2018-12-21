import mockStore from 'tests/mockStore';
import types from 'store/types/articles';
import { sortByUpdatedAt } from 'store/helpers';
import { prepareUrl } from 'utils/helpers';
import Factory from 'tests/factory';

import {
  addArticle,
  setArticles,
  getAllArticles,
  setSingle,
  fetchArticleBySlug,
  setComments,
  rateArticle,
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
  test('getAllArticles sorts the articles by updated_at', () => {
    const results = Factory.of('article').make(2);
    const store = mockStore({ articles: { all: [] } });
    const expectedActions = [{ type: types.SET_ARTICLES, articles: sortByUpdatedAt(results) }];

    fetch.restore();
    fetch.get(prepareUrl('articles'), { body: { article: { results } } });

    store.dispatch(getAllArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      fetch.restore();
    });
  });

  test('setComments action', () => {
    const comments = Factory.of('article').make(2);

    expect(setComments(comments)).toEqual({ type: types.SET_COMMENTS, comments });
  });

  test('it rates the article', () => {
    const store = mockStore({ rateData: { article_rate: {} } });
    const expectedActions = [{ type: types.RATE_ARTICLE }];

    fetch.restore();
    fetch.post(prepareUrl(`articles/what-is-my-name-354647/ratings/`), {
      body: { id: 1 },
    });

    store.dispatch(rateArticle('what-is-my-name-354647', 4)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      fetch.restore();
    });
  });

  test('it fails to rate the article for any other reason', () => {
    const store = mockStore({ rateData: { article_rate: {} } });
    const expectedActions = { type: types.RATE_ARTICLE };

    fetch.restore();
    fetch.post(prepareUrl(`articles/what-is-my-name-354647/ratings/`), 400);

    store.dispatch(rateArticle('what-is-my-name-354647', 4)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      fetch.restore();
    });
  });

  test('it fails to rate the article due to repeated rating detected', () => {
    const store = mockStore({ rateData: { article_rate: {} } });
    const expectedActions = [{ type: types.RATE_ARTICLE }];

    fetch.restore();
    fetch.post(prepareUrl(`articles/what-is-my-name-354647/ratings/`), 400, {
      body: {
        errors: {
          error: ['You cannot rate this article more than once'],
        },
      },
    });

    store.dispatch(rateArticle('what-is-my-name-354647', 4)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      fetch.restore();
    });
  });
});
