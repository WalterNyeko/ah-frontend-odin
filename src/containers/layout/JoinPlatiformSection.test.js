import React from 'react';
import renderer from 'react-test-renderer';
import { JoinPlatiformSection, mapActionsToProps } from './JoinPlatiformSection';

describe('JoinPlatiformSection', () => {
  test('It renders the same UI', () => {
    expect(
      renderer.create(<JoinPlatiformSection showSignUpModal={jest.fn()} />).toJSON(),
    ).toMatchSnapshot();
  });
  test('mapActionsToProps triggers showSignUpModal', () => {
    const dispatch = jest.fn();

    mapActionsToProps(dispatch).showSignUpModal();
    expect(dispatch).toHaveBeenCalled();
  });
});
