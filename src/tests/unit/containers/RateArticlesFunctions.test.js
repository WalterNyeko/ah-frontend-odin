import React from 'react';
import { shallow } from 'enzyme';
import { RateArticleTest } from '../../../containers/RateArticle';

describe('Rate Articles Functions', () => {
  let wrapper;

  it('test toggle function for rate articles', () => {
    wrapper = shallow(<RateArticleTest rate={{}} slug={{}} />);
    wrapper.instance().toggle();
  });
  it('test onStarClick  function for rate articles', () => {
    wrapper = shallow(<RateArticleTest rate={{}} slug={{}} />);
    wrapper.instance().onStarClick();
  });
});
