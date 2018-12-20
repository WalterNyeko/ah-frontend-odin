import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store/index';
import CompleteReset from './CompleteReset';

describe('Complete Password Reset', () => {
  let wrapper;

  it('tests that the complete reset component renders correctly', () => {
    wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <CompleteReset />
        </Provider>
      </MemoryRouter>,
    );
  });
});
