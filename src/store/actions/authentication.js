import types from 'store/types/authentication';

export const showAuthModal = name => ({ type: types.SHOW_MODAL, name });

export const hideAuthModal = name => ({ type: types.HIDE_MODAL, name });
export const setUser = user => ({ type: types.LOGIN_USER, user });
export const unsetUser = () => ({ type: types.UNSET_USER });
export const loginUser = user => (dispatch, getState, http) => {
  // we will set the token every time a user is logged in
  http.setToken(user.token);

  dispatch(setUser(user));
};

export const signUp = user => (dispatch, getState, http) =>
  http
    .post('users/', { user })
    .then(data => {
      dispatch({ type: types.SIGNUP, payload: data });
      dispatch(hideAuthModal('signup'));
      window.Notify.success(
        'You have been successfully registered .Please check your email and verify your account ',
      );
    })
    .catch(({ errors }) => {
      window.Notify.error(errors && errors.email ? errors.email[0] : errors.username[0]);
      dispatch({ type: 'SIGNUP-ERRORS', errors });
    });

export const socialAuthentication = (url, accessToken) => (dispatch, getState, http) =>
  http.post(url, { user: { access_token: accessToken } }).then(({ user }) => {
    dispatch(loginUser(user));
    dispatch(hideAuthModal('login'));
  });

export const logoutUser = history => dispatch =>
  window.Notify.confirm('You will be logged out of the application').then(() => {
    window.Notify.success('You were successfully logged out of the system');
    history.push('/');
    return dispatch(unsetUser());
  });
