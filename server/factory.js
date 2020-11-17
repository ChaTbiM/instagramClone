const faker = require("faker");

const randomInt = () => Math.floor(Math.random() * 25);
const randomIds = [...Array(randomInt())];

const returnComments = () => {
  const randomInt = [...Array(faker.random.number(10))];
  return randomInt.map((randomId, index) => {
    return {
      id: faker.random.uuid(),
      text: faker.lorem.sentence(2),
      user: {
        id: faker.random.number(200) + index,
        name: faker.name.findName(),
      },
    };
  });
};

const returnStories = () => {
  const randomInt = [...Array(faker.random.number(10))];
  return randomInt.map((int, index) => {
    return {
      id: faker.random.uuid(),
      image: `${faker.image.imageUrl(
        60,
        60,
      )}?random${faker.random.number(20)}`,
      timer: 60
    };
  });
};

const users = () =>
  randomIds.map((randomId, index) => {
    return {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      avatar: `${faker.image.imageUrl(
        60,
        60,
        "people"
      )}?random${faker.random.number(20)}`,
      stories: returnStories(),
    };
  });

const posts = () =>
  randomIds.map((randomId, index) => {
    return {
      id: faker.random.uuid(),
      image: `${faker.image.imageUrl(
        400,
        400,
        "nature"
      )}?random${faker.random.number(30)}`,
      sincePublished: faker.random.number(23),
      numberOfLikes: faker.random.number(166),
      comments: returnComments(),
    };
  });

module.exports = { posts, users };
