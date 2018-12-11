import types from 'store/types/forms';
import formReducer from './forms';

describe('Form Reducer', () => {
  test('It returns the initial state if no know type is given', () => {
    expect(formReducer({}, {})).toEqual({});
  });

  test('REGISTER_FORM', () => {
    const action = { type: types.REGISTER_FORM, payload: { data: {}, name: 'login' } };
    const newState = formReducer({}, action);
    expect(newState).toEqual({ login: { data: {}, errors: {} } });
  });

  test('UPDATE_VALUE', () => {
    const initialState = { login: { data: {}, errors: {} } };
    const action = {
      type: types.UPDATE_VALUE,
      payload: { form: 'login', name: 'email', value: 'johndoe@example.com' },
    };

    const newState = formReducer(initialState, action);
    expect(newState).toEqual({ login: { data: { email: 'johndoe@example.com' }, errors: {} } });
  });

  test('UPDATE_ERRORS', () => {
    const initialState = { login: { data: {}, errors: {} } };
    const errors = { email: ['this field is requird'] };
    const action = {
      type: types.UPDATE_ERRORS,
      payload: { form: 'login', errors },
    };

    const newState = formReducer(initialState, action);
    expect(newState).toEqual({ login: { data: {}, errors } });
  });

  test('RESET_FORM', () => {
    const initialState = { login: { data: { name: 'RolandKrm' } } };
    const action = {
      type: types.RESET_FORM,
      form: 'login',
    };

    const newState = formReducer(initialState, action);
    expect(newState).toEqual({ login: { data: {}, errors: {} } });
  });
});
