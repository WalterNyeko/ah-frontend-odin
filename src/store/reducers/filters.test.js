import types from 'store/types/filters';
import Factory from 'tests/factory';
import filterReducer from './filters';

describe('Filter reducer tests', () => {
  test('UPDATE_TITLE_FILTER', () => {
    const title = 'Some-title';
    expect(filterReducer({}, { type: types.UPDATE_TITLE_FILTER, title })).toEqual({ title });
  });

  test('UPDATE_FILTER_VALUE', () => {
    const initialState = { all: { key: 'value' } };
    const name = 'key';
    const value = 'updated-value';
    const newState = filterReducer(initialState, { type: types.UPDATE_FILTER_VALUE, name, value });

    expect(newState).toEqual({ all: { [name]: value } });
  });

  test('SET_RESULTS', () => {
    const initialState = { results: [] };
    const results = Object.values(Factory.of('article').make());

    const newState = filterReducer(initialState, { type: types.SET_RESULTS, results });

    expect(newState).toEqual({ results, error: null });
  });

  test('SET_RESULTS sets error to null if no result is found', () => {
    const initialState = { results: [] };

    const newState = filterReducer(initialState, { type: types.SET_RESULTS, results: [] });

    expect(newState).toEqual({ results: [], error: 'No results found' });
  });

  test('CLEAR_FILTERS', () => {
    const initialState = { all: { author: 'krmroland', body: 'some-body', tag: '' } };
    const newState = filterReducer(initialState, { type: types.CLEAR_FILTERS });

    expect(newState).toEqual({ all: { author: '', body: '', tag: '' }, title: '' });
  });
});
