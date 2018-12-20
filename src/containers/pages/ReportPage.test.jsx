import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Factory from 'tests/factory';
import { loginUser } from 'store/actions/authentication';
import store from 'store';
import ReportArticle from './ReportPage';

const user = Factory.of('user').make();
const article = Factory.of('article').make();

store.dispatch(loginUser(user));

const mountPage = () =>
  mount(
    <MemoryRouter>
      <Provider store={store}>
        <ReportArticle />
      </Provider>
    </MemoryRouter>,
  );

describe('Report Articles', () => {
  // test('it renders a create articles page if user is authenticated', () => {
  //   const wrapper = mountPage();

  //   expect(wrapper.find('container').text()).toEqual('Report Article');
  // });
  test('it triggers the successSubmit without crashing', () => {
    const wrapper = mountPage();

    expect(() => wrapper.find('ReportArticleForm').prop('successSubmit')(article)).not.toThrow();
  });
});
