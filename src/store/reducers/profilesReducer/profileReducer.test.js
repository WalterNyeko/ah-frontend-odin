import types from 'store/types/profiles';
import profileReducer from './index';

describe('Fetch profile reducers', () => {
  const profile = { username: 'suzan', bio: 'strong', image: 'hello', user: {} };

  it('test fetch profile reducer', () => {
    const initialState = { username: '', bio: '', image: '', user: {} };
    const newState = profileReducer(initialState, {
      type: types.FETCH_PROFILE,
      payload: { profile },
    });
    expect(newState).toEqual({
      username: 'suzan',
      bio: 'strong',
      image: 'hello',
      user: {},
    });
  });
});

describe('Update profile reducers', () => {
  const profile = { username: '', bio: '', image: '', user: {} };

  it('test update profile reducer', () => {
    const initialState = { username: '', bio: '', image: '', user: {} };
    const newState = profileReducer(initialState, {
      type: types.UPDATE_PROFILE,
      payload: { profile },
    });
    expect(newState).toEqual({
      username: '',
      bio: '',
      image: '',
      user: {},
    });
  });
});
