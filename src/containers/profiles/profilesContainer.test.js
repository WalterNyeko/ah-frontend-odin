import React from 'react';
import { shallow } from 'enzyme';
import { mapActionsToProps, ProfilesContainer } from './profilesContainer';

jest.mock('react-notify-toast');
const props = {
  fetchUserProfile: jest.fn(),
  match: { params: { username: 'Sue' } },
  user: { username: 'sue' },
  updateHandler: jest.fn(),
  image: '',
  profiles: {},
  email: '',
  bio: '',
};

describe('profiles container tests', () => {
  let wrapper;

  it('should render profiles component', () => {
    wrapper = shallow(<ProfilesContainer {...props} fetchUserProfile={jest.fn()} />);
    wrapper.instance().onChange({ target: { username: '', email: '', bio: '' } });
    wrapper.instance().onSubmit({ preventDefault: jest.fn });
  });

  it('can trigger all store actions', () => {
    const dispatch = jest.fn();
    const actions = mapActionsToProps(dispatch);

    Object.keys(actions).forEach(action => actions[action]({}));

    expect(dispatch).toHaveBeenCalledTimes(Object.keys(actions).length - 0);
  });
});
