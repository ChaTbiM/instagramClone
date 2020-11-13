const faker = require("faker");

const returnComments = ()=>{
    const randomIds = [...Array(faker.random.number(10))];
    return randomIds.map((randomId,index)=>{
        return {
            id:faker.random.number(50)+index,
            text:faker.lorem.sentence(2),
            name:faker.name.findName(),
        } 
    })
}
const randomIds = [...Array(faker.random.number(25))];
const posts = ()=> randomIds.map((randomId,i) => {
  return {
    id: i,
    image: `${faker.image.imageUrl(
      400,
      400,
      "nature"
    )}?random${faker.random.number(30)}`,
    sincePublished: faker.random.number(23),
    numberOfLikes: faker.random.number(166),
    user: {
      id: faker.random.number(200)+i,
      name: faker.name.findName(),
      avatar: `${faker.image.imageUrl(
        60,
        60,
        "people"
      )}?random${faker.random.number(20)}`,
    },
    comment: returnComments()
  };
});


module.exports = posts;
