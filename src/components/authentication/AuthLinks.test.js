import React from 'react';
import renderer from 'react-test-renderer';
import AuthLinks from './AuthLinks';

describe('AuthLinks', () => {
  test('It renders the same UI', () => {
    const user = { username: 'roland', email: 'rolandmbasa@gmail.com' };

    expect(
      renderer.create(<AuthLinks user={user} logout={jest.fn()} />).toJSON(),
    ).toMatchSnapshot();
  });
});
