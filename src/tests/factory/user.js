export default faker => ({
  username: faker.internet.userName(),
  bio: faker.lorem.paragraph(),
});
