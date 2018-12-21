import types from 'store/types/articles';
import bookMarkReducer from './Bookmark';

describe('Book Mark reducers', () => {
  it('test boomark reducer', () => {
    const initialState = { result: false, count: 0 };
    const newState = bookMarkReducer(initialState, {
      type: types.ADD_BOOKMARK,
      payload: { result: true, count: 1 },
    });

    expect(newState).toEqual({
      result: true,
      count: 1,
    });
  });
});
