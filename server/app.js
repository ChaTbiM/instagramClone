require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("./models/db.js");
const { userRoutes, postRoutes, storyRoutes } = require("./routes/index.js");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
// app.get("/", (req, res) => {
//   res.send("Hello WOrld");
// });
// app.use("/api/user", userRoutes);
// app.use("/api/post", postRoutes);
// app.use("/api/story", storyRoutes);

// Provisional API
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

const { posts, users } = require("./factory");
app.get("/posts", (req, res) => {
  let postsData = posts();
  let usersData = users();
  postsData.forEach((el, index) => {
    el.user = usersData[index];
  });
  res.status(200).json(postsData);
});

app.get("/users", (req, res) => {
  res.status(200).json(users());
});

// sequelize.drop();
// sequelize.sync({ force: true });
// sequelize.sync();

const testAssociations = require("./models/tests/associationsTest.js");

testAssociations();

app.listen(port, () => {
  console.log(`example app is listening on port: ${port}`);
});
