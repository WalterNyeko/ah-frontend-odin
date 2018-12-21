import React from 'react';
import { shallow } from 'enzyme';
import Factory from 'tests/factory';
import triggersmapActionsToProps from 'tests/triggersmapActionsToProps';
import { mapDispatchToProps, SearchComponent } from './SearchComponent';

describe('SearchComponent', () => {
  test('mapDispatchToProps', () => {
    triggersmapActionsToProps(mapDispatchToProps);
  });

  test('it displays Articles if there there is more than one result in search', () => {
    const articles = Object.values(Factory.of('article').make(2));
    const wrapper = shallow(
      <SearchComponent
        results={articles}
        filters={{}}
        updateSearchFilter={jest.fn()}
        filterSearchResults={jest.fn()}
        clearFilters={jest.fn()}
      />,
    );
    expect(wrapper.find('Articles')).toHaveLength(1);
  });

  test('it displays an alert if there is an error', () => {
    const error = 'No results found';
    const wrapper = shallow(
      <SearchComponent
        results={[]}
        filters={{}}
        error={error}
        updateSearchFilter={jest.fn()}
        filterSearchResults={jest.fn()}
        clearFilters={jest.fn()}
      />,
    );

    expect(wrapper.find('.alert').text()).toEqual(error);
  });
});
