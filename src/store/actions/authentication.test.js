import types from 'store/types/authentication';
import { prepareUrl } from 'utils/helpers';
import {
  showAuthModal,
  hideAuthModal,
  loginUser,
  socialAuthentication,
  logoutUser,
  showResetPasswordModal,
} from 'store/actions/authentication';
import mockStore from 'tests/mockStore';

describe('Authentication actions', () => {
  afterEach(() => {
    fetch.restore();
  });
  test('showAuthModal returns the right type and name', () => {
    expect(showAuthModal('login')).toEqual({ type: types.SHOW_MODAL, name: 'login' });
  });

  test('hideAuthModal returns the right type and name', () => {
    expect(hideAuthModal('login')).toEqual({ type: types.HIDE_MODAL, name: 'login' });
  });

  test('loginUser returns the right type and name', () => {
    const user = { name: 'krmroland' };

    const store = mockStore({});

    store.dispatch(loginUser(user));

    expect(store.getActions()).toEqual([{ type: types.LOGIN_USER, user }]);
  });

  test('authenticate user', () => {
    const data = { user: {} };

    fetch.post(prepareUrl('google/'), data);

    const expectedActions = [
      { type: 'LOGIN_USER', user: {} },
      { name: 'login', type: 'HIDE_AUTH_MODAL' },
    ];
    const store = mockStore({});
    const url = 'google/';
    const accessToken = 'saffsw3422555';

    return store.dispatch(socialAuthentication(url, { accessToken })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  test('logoutUser dispatches the logout action', () => {
    const store = mockStore({});
    // an array has a push method on it's prototype, we will use it as  mock for history
    const history = [];

    const confirm = jest.fn();
    confirm.mockResolvedValue(true);
    global.Notify.confirm = confirm;

    store.dispatch(logoutUser(history)).then(() => {
      expect(store.getActions()).toEqual([{ type: types.UNSET_USER }]);
    });
  });

  test('showResetModal returns the right type and name', () => {
    const store = mockStore({});

    store.dispatch(showResetPasswordModal());

    expect(store.getActions()).toEqual([
      { name: 'login', type: 'HIDE_AUTH_MODAL' },
      { name: 'passwordReset', type: 'SHOW_AUTH_MODAL' },
    ]);
  });
});
