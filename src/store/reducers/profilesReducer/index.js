import types from '../../types/profiles';

const initialState = {
  username: '',
  bio: '',
  image: '',
  user: { username: '' },
};

const profileReducer = (state = initialState, action) => {
  const { payload: data } = action;
  switch (action.type) {
    case types.FETCH_PROFILE:
      return {
        ...state,
        username: data.profile.username,
        bio: data.profile.bio,
        image: data.profile.image,
      };

    case types.UPDATE_PROFILE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default profileReducer;
