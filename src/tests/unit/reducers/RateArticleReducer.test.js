import rateData from '../../../store/reducers/article';
import types from '../../../store/types/articles';

describe('Rate article reducer', () => {
  test('It rates the article', () => {
    const mydata = 4;
    const initialState = { mydata };
    const newState = rateData(initialState, { type: types.RATE_ARTICLE, mydata });
    expect(newState).toEqual({ article_rate: 4, mydata });
  });
});
