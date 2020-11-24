const faker = require("faker");

class Data {
  // randomInt = () => Math.floor(Math.random() * 25);
  // randomIds = [...Array(randomInt())];

  constructor() {
    this.randomInt = [...Array(faker.random.number({ min: 8, max: 25 }))];
  }

  returnComments = () => {
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

  returnStories = () => {
    const randomInt = [...Array(faker.random.number(10))];
    return randomInt.map((int, index) => {
      return {
        id: faker.random.uuid(),
        image: `${faker.image.imageUrl(310, 545)}?random${faker.random.number(
          20
        )}`,
        timer: 60,
      };
    });
  };

  users = () => {
    return this.randomInt.map((int, index) => {
      return {
        id: faker.random.uuid(),
        name: faker.name.findName(),
        userName: faker.internet.userName(),
        avatar: `${faker.image.imageUrl(
          60,
          60,
          "people"
        )}?random${faker.random.number(20)}`,
        stories: this.returnStories(),
      };
    });
  };

  posts = () => {
    return this.randomInt.map((int, index) => {
      return {
        id: faker.random.uuid(),
        image: `${faker.image.imageUrl(
          400,
          400,
          "nature"
        )}?random${faker.random.number(30)}`,
        sincePublished: faker.random.number(23),
        numberOfLikes: faker.random.number(166),
        comments: this.returnComments(),
      };
    });
  };
}

const generatedData = new Data();
const posts = generatedData.posts;
const users = generatedData.users;

module.exports = { posts, users };
