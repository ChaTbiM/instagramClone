import faker from "faker";

const userFactory = {
  name() {
    return faker.name.findName();
  },
  avatar() {
    return `${faker.image.imageUrl(
      60,
      60,
      "people"
    )}?random${faker.random.number(20)}`;
  },
};

export default userFactory;
