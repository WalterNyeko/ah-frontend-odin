import React from 'react';
import { shallow } from 'enzyme';
import Factory from 'tests/factory';
import Article from './Article';
import TagList from './TagList';

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
});
