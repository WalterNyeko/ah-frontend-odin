import React from 'react';
import { shallow } from 'enzyme';
import Factory from 'tests/factory';
import NewComment from './NewComment';

describe('NewComment tests', () => {
  test('it shows a form if a a user is authenticated', () => {
    const user = Factory.of('user').make();
    const article = Factory.of('article').make();
    const wrapper = shallow(<NewComment user={user} addComment={jest.fn()} article={article} />);
    expect(wrapper.find('img')).toHaveLength(1);
  });
  test('it returns null if no user is authenticted', () => {
    const wrapper = shallow(<NewComment user={null} addComment={jest.fn()} />);

    expect(wrapper.text()).toEqual('');
  });
});
