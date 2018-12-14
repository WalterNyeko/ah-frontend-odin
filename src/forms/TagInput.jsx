import React from 'react';
import PropTypes from 'prop-types';
import TagsInput from 'react-tagsinput';
import classNames from 'classnames';
import { BaseInput } from './BaseInput';

const CustomTagInput = props => (
  <BaseInput
    {...props}
    renderInput={(locals, data, handleChange, hasError) => (
      <TagsInput
        {...locals}
        onChange={tags => handleChange(locals.name, tags)}
        className={classNames(locals.className, { 'is-invalid': hasError })}
        value={data[locals.name] || []}
      />
    )}
  />
);

CustomTagInput.propTypes = {
  name: PropTypes.string.isRequired,
};

CustomTagInput.displayName = 'CustomTagInput';

export default CustomTagInput;
