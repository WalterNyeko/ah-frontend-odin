import mockStore from 'tests/mockStore';
import Factory from 'tests/factory';
import types from 'store/types/filters';
import { filterArticlesUrl } from 'utils/articles';
import { updateTitleFilter, filterResults, setResults } from './filters';

describe('filter actions', () => {
  test('updateTitleFilter', () => {
    const title = 'Some title';

    expect(updateTitleFilter(title)).toEqual({ type: types.UPDATE_TITLE_FILTER, title });
  });

  test('setResults', () => {
    const results = Factory.of('article').make(2);

    expect(setResults(results)).toEqual({ type: types.SET_RESULTS, results });
  });
  test('filterResults actions', () => {
    const filters = { all: { title: 'author', tag: 'odin-devs' } };
    const store = mockStore({ filters });
    const articles = Object.values(Factory.of('article').make(2));
    fetch.get(filterArticlesUrl(filters), { body: { article: { results: articles } } });

    store.dispatch(filterResults()).then(() => {
      expect(store.getActions()).toEqual({ type: types.SET_RESULTS, results: articles });
    });
  });
});
