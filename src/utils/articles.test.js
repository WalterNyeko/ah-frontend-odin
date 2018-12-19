import Factory from 'tests/factory';
import { commentUrl, filterArticlesUrl } from './articles';

describe('Article utils', () => {
  test('commentUrl returns the correct url for an article', () => {
    const article = Factory.of('article').make();
    expect(commentUrl(article)).toEqual(`articles/${article.slug}/comments`);
  });

  test('filterArticlesUrl returns correct url query', () => {
    const title = 'some-title';
    const filters = { key: 'hello-world' };
    const url = filterArticlesUrl({ all: filters, title });
    expect(url).toEqual('articles?key=hello-world&title=some-title');
  });
});
