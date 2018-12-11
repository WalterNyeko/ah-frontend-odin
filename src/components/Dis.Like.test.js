import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import LikeButton, { Liker } from './Liker';
import DislikeButton, { Disliker } from './Disliker';

const article = { title: 'Authors Haven introduction', slug: 'title-1', tagList: [] };
const user = {
  email: 'collo@gmail.com',
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImNvbGxvIiwiZXhwIjoxNTQ0NzIwMDMyfQ._U4hjBxWdaAmibexHILajQifjuJ3yM8PPeH_RidAl64',
  username: 'collo',
};
describe('Liker', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <LikeButton article={article} user={user} />
      </Provider>
    </MemoryRouter>,
  );
  const renderer = shallow(<Liker dispatch={jest.fn()} article={article} />);
  test('If Likerbutton renders well', () => {
    expect(() => wrapper).not.toThrow();
  });
  it('should click on handleclick', () => {
    const handleClick = jest.spyOn(renderer.instance(), 'handleClick');
    renderer.find('FontAwesomeIcon').simulate('click');
    renderer.find('FontAwesomeIcon').simulate('click');
    expect(handleClick).toHaveBeenCalled();
    handleClick.mockClear();
  });
});

describe('DislikeButton', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <DislikeButton article={article} user={user} />
      </Provider>
    </MemoryRouter>,
  );
  const render = shallow(<Disliker dispatch={jest.fn()} article={article} />);
  test('If DislikeButton renders well', () => {
    expect(() => wrapper).not.toThrow();
  });
  it('should click on handleclick', () => {
    const handleClick = jest.spyOn(render.instance(), 'handleClick');
    render.find('FontAwesomeIcon').simulate('click');
    render.find('FontAwesomeIcon').simulate('click');
    expect(handleClick).toHaveBeenCalled();
    handleClick.mockClear();
  });
});
