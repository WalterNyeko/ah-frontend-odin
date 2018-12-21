import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './getProfile';

const props = {
  username: '',
  bio: '',
  image: '',
  user: {
    email: 'suzan@gmail.com',
  },
  email: '',
  profiles: {
    bio: 'Not searching',
  },
  avatar: '',
  handleEdit: jest.fn(),
  isEditing: true,
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  handleUpload: jest.fn(),
};

describe('User profile form test', () => {
  it('should render user profile component', () => {
    shallow(<UserProfile {...props} />);
  });
});
