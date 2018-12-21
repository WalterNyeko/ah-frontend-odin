import React from 'react';
import { shallow } from 'enzyme';
import Filters from '.';

describe('Index tests', () => {
  test('calls filterSearchResults on Submit', () => {
    const filterSearchResults = jest.fn();

    const wrapper = shallow(
      <Filters
        match={{ path: '/search' }}
        titleQuery=""
        updateSearchTitle={jest.fn()}
        filterSearchResults={filterSearchResults}
      />,
    );

    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(filterSearchResults).toHaveBeenCalled();
  });

  test('calls updateSearchTitle on input', () => {
    const updateSearchTitle = jest.fn();

    const wrapper = shallow(
      <Filters
        match={{ path: '/search' }}
        titleQuery=""
        filterSearchResults={jest.fn()}
        updateSearchTitle={updateSearchTitle}
      />,
    );

    wrapper.find('input').simulate('change', { currentTarget: { value: '' } });

    expect(updateSearchTitle).toHaveBeenCalled();
  });
});
