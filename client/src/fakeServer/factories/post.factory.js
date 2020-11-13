import faker from "faker";

const postFactory = {
  title() {
    return faker.lorem.words(3);
  },
  image() {
    return `${faker.image.imageUrl(
      400,
      400,
      "nature"
    )}?random${faker.random.number(20)}`;
  },
  sincePublished() {
    return faker.random.number(23);
  },
  numberOfLikes() {
    return faker.random.number(166);
  },
};

export default postFactory;
