const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const env = process.env.NODE_ENV || "development";
require("dotenv").config({ path: `.env.${env}` });

const app = express();
const port = process.env.PORT || 5000;

const { userRoutes, postRoutes, storyRoutes } = require("./routes/index.js");
const { sequelize } = require("./models/db.js");

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

app.get("/env", (req, res) => {
  res.status(200).send(process.env.DB_USERNAME + " working");
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

const testDatabase = require("./testRelationships");

app.listen(port, async () => {
  console.log(`example app is listening on port: ${port}`);

  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log("error connecting to the database !");
  }
  // await sequelize.drop();
  // await sequelize.sync({ force: true });
  testDatabase();
});
