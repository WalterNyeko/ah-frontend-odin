import React from 'react';
import { shallow } from 'enzyme';
import Factory from 'tests/factory';
import ArticleWithDetails from './ArticleWithDetails';

describe('ArticleWithDetails tests', () => {
  test('Article with details renders Article footer', () => {
    const article = Factory.of('article').make();

    const wrapper = shallow(<ArticleWithDetails article={article} addComment={jest.fn()} />);

    expect(wrapper.find('ArticleFooter')).toHaveLength(1);
  });
});
