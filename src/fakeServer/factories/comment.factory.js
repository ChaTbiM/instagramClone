import faker from "faker";

const commentFactory = {
  text() {
    return faker.lorem.sentence(3);
  },
};

export default commentFactory;
