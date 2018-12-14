import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { prepareUrl } from 'utils/helpers';
import Factory from 'tests/factory';
import store from 'store';
import ArticlesForm from './ArticleForm';

describe('Article form tests', () => {
  test('It  submits without throwing an error', () => {
    const article = Factory.of('article').make();
    const successSubmit = jest.fn();

    fetch.post(prepareUrl('/articles'), { body: { article } });

    const wrapper = mount(
      <Provider store={store}>
        <ArticlesForm title="Create an article" successSubmit={successSubmit} />
      </Provider>,
    );
    expect(() => wrapper.find('form').simulate('submit')).not.toThrow();
  });
});
