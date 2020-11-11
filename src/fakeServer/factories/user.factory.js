import faker from "faker";

const userFactory = {
  name: faker.name.findName(),
  avatar() {
    return faker.image.imageUrl(60, 60, "people");
  },
};

export default userFactory;
