const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY;

function generateToken(user) {
  const token = jwt.sign(user.dataValues, secret_key);
  return token;
}

function verifyToken(token) {
  const userPayload = jwt.verify(token, secret_key);
  if (userPayload) {
    return userPayload;
  }

  return false;
}

function checkPasswordMatch(loginData, user) {
  const { password: loginPassword } = loginData;
  const { password: userPassword } = user;
  if (loginPassword === userPassword) {
    return true;
  }

  return false;
}

module.exports = { generateToken, verifyToken, checkPasswordMatch };
