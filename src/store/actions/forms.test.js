import types from 'store/types/forms';
import mockStore from 'tests/mockStore';
import { prepareUrl } from 'utils/helpers';
import { registerForm, updateValue, updateErrors, resetForm, submitForm } from './forms';

describe('Form actions', () => {
  test('registerForm', () => {
    const name = 'login-form';
    const data = { name: 'Ahimbisibwe Roland' };

    expect(registerForm(name, data)).toEqual({
      type: types.REGISTER_FORM,
      payload: { name, data },
    });
  });

  test('updateValue', () => {
    const data = { form: 'signup-form', name: 'email', value: 'email@example.com' };

    expect(updateValue(...Object.values(data))).toEqual({
      type: types.UPDATE_VALUE,
      payload: data,
    });
  });

  test('updateErrors', () => {
    const form = 'login-form';
    const errors = { name: ['This field is required'] };

    expect(updateErrors(form, errors)).toEqual({
      type: types.UPDATE_ERRORS,
      payload: { form, errors },
    });
  });

  test('resetForm', () => {
    expect(resetForm('login-form')).toEqual({ type: types.RESET_FORM, form: 'login-form' });
  });

  test('resetForm', () => {
    expect(resetForm('login-form')).toEqual({ type: types.RESET_FORM, form: 'login-form' });
  });

  test('submitForm', () => {
    const url = '/login';
    const data = { email: 'johndoe@example.com' };
    const store = mockStore({});

    fetch.post(prepareUrl(url), { body: data });

    store.dispatch(submitForm({ url, data, method: 'post' })).then(response => {
      expect(response).toEqual(data);
    });
  });
});
