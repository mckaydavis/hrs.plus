const faker = require('faker');

module.exports = {
  Chapter(title) {
    return {
      name: fakeName,
    };
  },
  Division() {
    return {
      name: fakeName,
    };
  },
  ID() {
    return faker.random.number({ min: 1, max: 999 });
  },
  Section() {
    return {
      body: fakeBody,
      name: fakeName,
    };
  },
  Title() {
    return {
      name: fakeName,
    };
  },
  Volume() {
    return {};
  },
};

function fakeName() {
  return faker.lorem.words();
}

function fakeBody() {
  return faker.lorem.paragraphs();
}
