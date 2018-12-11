import take from 'lodash/take';

const tags = ['json', 'react', 'jest', 'andela', 'dragons', 'es6'];

export default (faker, Factory) => ({
  title: faker.lorem.word(),
  description: faker.lorem.words(2),
  body: faker.lorem.paragraphs(4),
  slug: faker.lorem.slug(),
  tagList: take(faker.helpers.shuffle(tags), 2),
  created_at: faker.date.recent(),
  author: Factory.of('user').make(),
  updated_at: faker.date.recent(),
});
