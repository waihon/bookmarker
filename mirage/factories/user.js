import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  username() { return faker.internet.userName(); },
  email() { return faker.internet.email(); },
  firstName() { return faker.name.firstName(); },
  lastName() { return faker.name.lastName(); },
  avatar() { return faker.internet.avatar(); },
  isAdmin() { return faker.random.boolean(0, 1); },
  created() { return faker.date.past(); },
  afterCreate(user, server) {
    // Simulate some users don't have any bookmark.
    server.createList('bookmark', faker.random.number({ min: 0, max: 5 }), { user });
  }
});
