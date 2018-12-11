import React from 'react';
import { shallow } from 'enzyme';
import Factory from 'tests/factory';
import ArticleFooter from './ArticleFooter';

describe('Article Footer tests', () => {
  test('It renders without crashing', () => {
    const article = Factory.of('article').make();

    expect(() => shallow(<ArticleFooter article={article} />)).not.toThrow();
  });
});
