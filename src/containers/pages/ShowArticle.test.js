import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Factory from 'tests/factory';
import store from 'store';
import triggersmapActionsToProps from 'tests/triggersmapActionsToProps';
import { ShowArticle, mapActionsToProps } from './ShowArticle';

const article = Factory.of('article').make();

const createWrapper = (
  fetchSingleArticle = jest.fn(),
  loading = false,
  selectedArticle = article,
) => (
  <ShowArticle
    match={{ params: { slug: 'title' } }}
    selectedArticle={selectedArticle}
    fetchSingleArticle={fetchSingleArticle}
    addArticleComment={jest.fn()}
    loading={loading}
  />
);

describe('ShowArticle tests', () => {
  test('it renders without crashing', () => {
    const fetchSingleArticle = jest.fn(() => Factory.of('article').make());
    mount(
      <Provider store={store}>
        <MemoryRouter>
          <div>{createWrapper(fetchSingleArticle)}</div>
        </MemoryRouter>
      </Provider>,
    );
    expect(fetchSingleArticle).toHaveBeenCalled();
  });

  test('it shows no article found if selectedArticle is null', () => {
    const wrapper = shallow(createWrapper(jest.fn(), false, null));
    expect(wrapper.find('h2').text()).toEqual('Article Not found');
  });

  test('it can trigger all store actions', () => {
    triggersmapActionsToProps(mapActionsToProps);
  });
});
