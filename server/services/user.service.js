const { User } = require("../models/db.js");

createUser = async (userDTO) => {
  const user = User.build(userDTO);

  return await user.save();
};

module.exports = { createUser };
