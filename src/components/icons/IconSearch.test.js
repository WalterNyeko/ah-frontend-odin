import React from 'react';
import renderer from 'react-test-renderer';
import IconSearch from './IconSearch';

describe('IconSearch', () => {
  test('It renders the same icon', () => {
    expect(renderer.create(<IconSearch />).toJSON()).toMatchSnapshot();
  });
});
