import React from 'react';
import { shallow } from 'enzyme';
import Factory from 'tests/factory';
import ReportArticleForm from './ReportForm';

describe('CommentForm tests', () => {
  test('it nests data into a report', () => {
    const article = Factory.of('article').make();
    const report = { reason: 'hvvvhjkvh' };

    const wrapper = shallow(<ReportArticleForm article={article} />);

    expect(wrapper.prop('beforeSubmit')(report)).toEqual({ report });
  });
});
