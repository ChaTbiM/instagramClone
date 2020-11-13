const faker = require("faker");

const returnComments = () => {
  const randomIds = [...Array(faker.random.number(10))];
  return randomIds.map((randomId, index) => {
    return {
      id: faker.random.number(50) + index,
      text: faker.lorem.sentence(2),
      user: {
        id: faker.random.number(200) + index,
        name: faker.name.findName(),
      },
    };
  });
};
const randomIds = [...Array(faker.random.number(25))];

const users = () => randomIds.map((randomId,index)=>{
  return {
    id: faker.random.number(25) + index,
        name: faker.name.findName(),
        avatar: `${faker.image.imageUrl(
          60,
          60,
          "people"
        )}?random${faker.random.number(20)}`,
  }
})

const posts = () =>
  randomIds.map((randomId, index) => {
    return {
      id: faker.random.number(25) + index,
      image: `${faker.image.imageUrl(
        400,
        400,
        "nature"
      )}?random${faker.random.number(30)}`,
      sincePublished: faker.random.number(23),
      numberOfLikes: faker.random.number(166),
      user:users[index],
      comment: returnComments(),
    };
  });


module.exports = {posts,users};