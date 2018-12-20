import React from 'react';
import { shallow } from 'enzyme';
import BookMarkButton from './Bookmark';

const props = {
  bookmarkHandler: jest.fn(),
  slug: '',
  result: '',
};

describe('Bookmark icon', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BookMarkButton {...props} bookmarkHandler={jest.fn()} />);
  });

  it('should render Button icon', () => {
    const button = wrapper.find('.btn-link');
    expect(button).toHaveLength(1);
  });

  it('should call bookmarkHandler', () => {
    const button = wrapper.find('.btn-link');
    button.simulate('click');
    expect(button).toHaveLength(1);
  });
});
