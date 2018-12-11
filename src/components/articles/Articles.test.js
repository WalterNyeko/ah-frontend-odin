import React from 'react';
import { shallow } from 'enzyme';
import Factory from 'tests/factory';
import Articles from './Articles';

const articles = Factory.of('article').make(2);

describe('Articles', () => {
  test('It Articles  articles all Article', () => {
    const wrapper = shallow(<Articles articles={articles} />);

    expect(wrapper.find('Article')).toHaveLength(2);
  });
});
