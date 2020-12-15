const userService = require("../services/user.service");
const authService = require("../services/auth.service");

async function registerUser(req, res) {
  const signupData = {
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  // create user through service
  const user = await userService.createUser(signupData);

  // create token through service
  const token = authService.generateToken(user);

  // return response token
  const response = {
    success: true,
    message: "user registered successfully",
    data: {
      user,
      token,
    },
  };
  res.status(200).json(response);
}

async function login(req, res) {
  const loginData = {
    username: req.body.username,
    password: req.body.password,
  };

  // get matched user through service
  const user = await userService.getMatchedUser(loginData);

  if (!user) {
    const failure = {
      success: false,
      message: "user don't exist",
      data: null,
    };
    return res.status(403).json(failure);
  }

  // check if password provided by visitor match
  const passwordMatched = authService.checkPasswordMatch(loginData, user);

  if (!passwordMatched) {
    const failure = {
      success: false,
      message: "password don't match",
      data: null,
    };
    return res.status(403).json(failure);
  }

  // create token through service
  const token = authService.generateToken(user);

  // return response token
  const response = {
    success: true,
    message: "user logged in successfully",
    data: {
      user,
      token,
    },
  };
  return res.status(200).json(response);
}

module.exports = { registerUser, login };
