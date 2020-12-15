const { User } = require("../models/db.js");

createUser = async (signupData) => {
  // Create User
  const user = User.build({
    username: "username1",
    name: "fullname",
    password: "pass",
    email: "email@gmail.com",
    avatar: "ava",
  });
  return await user.save();
};

getMatchedUser = async (loginData) => {
  const { username } = loginData;
  return await User.findOne({ where: { username } });
};
module.exports = { createUser, getMatchedUser };
