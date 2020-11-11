import faker from "faker";

const postFactory = {
  title() {
    return faker.lorem.words(3);
  },
  image() {
    return faker.image.imageUrl(613, 613, "nature");
  },
  sincePublished() {
    return faker.random.number(23);
  },
  numberOfLikes() {
    return faker.random.number(166);
  },
};

export default postFactory;
