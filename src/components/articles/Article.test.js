import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/index';
import Factory from 'tests/factory';
import Article from './Article';
import TagList from './TagList';
import { ArticleRateComponent } from '../../components/articles/ArticleRateComponent';
import ArticleRate from '../../containers/ArticleRate';
import RateArticle from '../../containers/RateArticle';
import UnRatedArticle from '../../containers/UnRatedArticle';

const article = Factory.of('article').make();

describe('Article', () => {
  test('It Article shows the right title', () => {
    const wrapper = shallow(<Article article={article} />);

    expect(wrapper.find('.card-title').text()).toEqual(article.title);
  });
  test('TagList renders all article tags', () => {
    const tags = article.tagList;
    const wrapper = shallow(<TagList tags={tags} />);

    expect(wrapper.find('.badge')).toHaveLength(tags.length);
  });

  it('tests that the rating component renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ArticleRateComponent rating={{}} onStarClick={jest.fn()} />
      </Provider>,
    );
  });
  it('tests that the articlerate component renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ArticleRate />
      </Provider>,
    );
  });
  it('tests that the unrated component renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <UnRatedArticle />
      </Provider>,
    );
  });
  it('tests that the RateArticle component renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <RateArticle />
      </Provider>,
    );
  });
});
