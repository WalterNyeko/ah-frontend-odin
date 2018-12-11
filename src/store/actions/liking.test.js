import types from 'store/types/liking';
import mockStore from 'tests/mockStore';
import { likingArticle, dislikingArticle } from 'store/actions/liking';
import { API_URL } from 'utils/constants';
import Http from 'utils/Http';
import { prepareUrl } from 'utils/helpers';
import fetchMock from 'fetch-mock';

const article = {
  title: 'How to cane Roland',
  description: 'Ever wondered how it could be done?',
  body: 'You got to start believing in doing it',
  author: {
    username: 'test',
    email: 'test@qa.team',
  },
  created_at: '2018-12-12',
  updated_at: '2018-12-12T11:25:20.312046+03:00',
  tagList: ['caning', 'sticks', 'emboko'],
  slug: 'how-to-cane-roland-2d52e90af2e0',
  published: true,
  image: null,
  likescount: 0,
  dislikescount: 0,
  read_time: 'Less than a minute',
};
let http;

describe('Liking Actions', () => {
  beforeEach(() => {
    http = new Http(API_URL);
    fetchMock.restore();
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it('should like an article', () => {
    const data = { articles: { article_like: false } };
    fetchMock.post(prepareUrl('articles/some-slug-1/likes'), {
      status: 201,
      body: data,
      headers: {
        Authorization:
          'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJleHAiOjE1NDQ2MDY3MTV9.vGQIwAOLKBTBV1WcdvHxwWgrEX2nkySSoRiVhM0paZs',
      },
    });
    http.post('articles/some-slug-1/likes', data);
    const expectedActions = [{ type: types.LIKE_ARTICLE, payload: data }];
    const store = mockStore({});

    return store.dispatch(likingArticle(article, true)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dislike an article', () => {
    const data = { articles: { article_like: true } };
    fetchMock.post(prepareUrl('articles/some-slug-1/likes'), {
      status: 201,
      body: data,
      headers: {
        Authorization:
          'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJleHAiOjE1NDQ2MDY3MTV9.vGQIwAOLKBTBV1WcdvHxwWgrEX2nkySSoRiVhM0paZs',
      },
    });
    http.post(`articles/slug-1/likes`, data);
    const expectedActions = [{ type: types.DISLIKE_ARTICLE, payload: data }];
    const store = mockStore({});

    return store.dispatch(dislikingArticle(article, false)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
