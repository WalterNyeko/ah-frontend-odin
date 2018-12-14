import React from 'react';
import { shallow } from 'enzyme';
import Factory from 'tests/factory';
import { UnAuthorized } from './UnAuthorized';

describe('UnAuthorized', () => {
  test('It redirects if user is alreadly authenticated', () => {
    const user = Factory.of('user').make();

    const wrapper = shallow(<UnAuthorized user={user} />);

    expect(wrapper.find('Redirect')).toHaveLength(1);
  });
  test('It shows the right message if not authenticated', () => {
    const wrapper = shallow(<UnAuthorized user={null} />);

    expect(wrapper.find('h2').text()).toEqual('You are unauthorized to see this page');
  });
});
