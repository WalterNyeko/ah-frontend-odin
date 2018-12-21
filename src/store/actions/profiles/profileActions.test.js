import mockStore from 'tests/mockStore';
import types from 'store/types/profiles';
import { prepareUrl } from 'utils/helpers';
import { fetchProfile, updateProfile } from './profileActions';

describe('async actions', () => {
  it('should fetch user profile', () => {
    let username;
    const data = {};
    fetch.get(`https://authors-haven-odin.herokuapp.com/api/profile/${username}`, data);
    const expectedActions = [{ type: types.FETCH_PROFILE, payload: [] }];
    const store = mockStore({});

    return store.dispatch(fetchProfile()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('async actions', () => {
  it('should update user profile', () => {
    const username = 'username';
    const data = { bio: 'strong', image: 'hello' };
    const store = mockStore({});
    fetch.put(prepareUrl(`profile/${username}`), {
      status: 201,
      body: { data },
    });
    const expectedActions = [
      { type: types.UPDATE_PROFILE, payload: { data } },
      { type: types.FETCH_PROFILE, payload: { data } },
    ];
    return store.dispatch(updateProfile(data, username)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
