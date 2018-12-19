export default (faker, Factory) => ({
  body: faker.lorem.paragraphs(2),
  slug: faker.lorem.slug(),
  created_at: faker.date.recent().toLocaleDateString(),
  author: Factory.of('user').make(),
  updated_at: faker.date.recent().toLocaleDateString(),
});
