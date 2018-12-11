import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './Loader';

describe('Loader', () => {
  test('It renders the same icon', () => {
    expect(renderer.create(<Loader />).toJSON()).toMatchSnapshot();
  });
});
