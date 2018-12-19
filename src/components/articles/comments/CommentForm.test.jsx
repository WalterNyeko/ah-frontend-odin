import React from 'react';
import { shallow } from 'enzyme';
import Factory from 'tests/factory';
import CommentForm from './CommentForm';

describe('CommentForm tests', () => {
  test('it nests data into a comment object before submission', () => {
    const article = Factory.of('article').make();
    const comment = Factory.of('comment').make();

    const wrapper = shallow(<CommentForm addComment={jest.fn()} article={article} />);

    expect(wrapper.prop('beforeSubmit')(comment)).toEqual({ comment });
  });

  test('It triggers the addComment after submission', () => {
    const article = Factory.of('article').make();
    const comment = Factory.of('comment').make();
    const addComment = jest.fn();
    const wrapper = shallow(<CommentForm addComment={addComment} article={article} />);

    wrapper.prop('successSubmit')({ Comment: comment });

    expect(addComment).toHaveBeenCalled();
  });
});
