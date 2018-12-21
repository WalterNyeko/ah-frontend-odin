import mockStore from 'tests/mockStore';
import types from 'store/types/articles';
import bookMarkAction from './Bookmark';
import { prepareUrl } from 'utils/helpers';
describe('bookmark actions', () => {
  it('should bookmark article', () => {
    let slug;
    const data = {};
    fetch.post(prepareUrl(`articles/${slug}/bookmark`), data);
    const expectedActions = [{ type: types.ADD_BOOKMARK, payload: {} }];
    const store = mockStore({});

    return store.dispatch(bookMarkAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
