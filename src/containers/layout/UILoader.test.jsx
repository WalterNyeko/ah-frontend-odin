import React from 'react';
import { shallow } from 'enzyme';
import { Loader } from './UILoader';

describe('UI Loader', () => {
  test('it shows loader icon when loading is true', () => {
    const wrapper = shallow(<Loader loading />);
    expect(wrapper.find('.ui-loader')).toHaveLength(1);
  });

  test('it does not shows loader icon when loading is false', () => {
    const wrapper = shallow(<Loader loading={false} />);
    expect(wrapper.find('.ui-loader')).toHaveLength(0);
  });
});
