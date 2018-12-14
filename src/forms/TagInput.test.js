import React from 'react';
import { mount } from 'enzyme';
import TagInput from './TagInput';
import FormErrors from './FormErrors';

describe('TagInput', () => {
  test('It handles triggers the handleChange Event', () => {
    const handleChange = jest.fn();
    const errors = new FormErrors({});
    const wrapper = mount(
      <TagInput handleChange={handleChange} errors={errors} data={{}} name="tags" />,
    );

    wrapper.find('TagsInput').prop('onChange')([]);
    expect(handleChange).toHaveBeenCalled();
  });
});
