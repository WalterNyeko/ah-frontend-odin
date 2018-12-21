import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';

describe('Filter', () => {
  test('it triggers filterSearchResults', () => {
    const filterSearchResults = jest.fn();
    const wrapper = shallow(
      <Filters
        filters={{ author: '' }}
        updateSearchFilter={jest.fn()}
        filterSearchResults={filterSearchResults}
        clearFilters={jest.fn()}
      />,
    );
    wrapper.simulate('submit', { preventDefault: jest.fn() });

    expect(filterSearchResults).toHaveBeenCalled();
  });

  test('it triggers handleChange', () => {
    const updateSearchResults = jest.fn();
    const wrapper = shallow(
      <Filters
        filters={{ author: '' }}
        updateSearchFilter={updateSearchResults}
        filterSearchResults={jest.fn()}
        clearFilters={jest.fn()}
      />,
    );
    wrapper.find('input').simulate('change', { currentTarget: { value: '' } });

    expect(updateSearchResults).toHaveBeenCalled();
  });
});
