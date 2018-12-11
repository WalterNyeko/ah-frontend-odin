import React from 'react';
import renderer from 'react-test-renderer';
import IconPlus from './IconPlus';

describe('IconPlus', () => {
  test('It renders the same icon', () => {
    expect(renderer.create(<IconPlus />).toJSON()).toMatchSnapshot();
  });
});
