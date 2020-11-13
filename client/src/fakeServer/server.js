// src/server.js
import {
  belongsTo,
  hasMany,
  createServer,
  Factory,
  Model,
  Serializer,
} from "miragejs";
import commentFactory from "./factories/comment.factory";
import postFactory from "./factories/post.factory";
import userFactory from "./factories/user.factory";
import faker from "faker";

const ApplicationSerializer = Serializer.extend();

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      post: Model.extend({
        user: belongsTo(),
        comment: hasMany(),
      }),

      user: Model.extend({
        post: hasMany(),
      }),

      comment: Model.extend({
        post: belongsTo(),
        user: belongsTo(),
      }),
    },

    factories: {
      user: Factory.extend({ ...userFactory }),
      post: Factory.extend({ ...postFactory }),
      comment: Factory.extend({ ...commentFactory }),
    },

    serializers: {
      application: ApplicationSerializer,
      post: ApplicationSerializer.extend({
        include: ["comment", "user"],
        embed: true,
        root: false,
      }),
      comment: ApplicationSerializer.extend({
        include: ["post", "user"],
        embed: true,
        root: false,
      }),
    },

    seeds(server) {
      server.createList("user", 5).forEach((user) => {
        server
          .createList("post", faker.random.number(4), { user })
          .forEach((post) => {
            server
              .createList("comment", faker.random.number(7), {
                post,
              })
              .forEach((comment) => {
                comment.update({ user: server.create("user") });
              });
          });
      });

      // console.log(server.db.dump(), "dump");
    },

    routes() {
      this.namespace = "api";
      // let serialize = this.serialize;
      this.get("/users", (schema) => {
        return schema.users.all();
      });

      this.get("/posts", function (schema, request) {
        const posts = schema.posts.all();
        const json = this.serialize(posts, "post");
        let shuffledPosts = json
          .map((a) => ({ sort: Math.random(), value: a }))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value);
        return shuffledPosts;
      });

      this.get("/comments", (schema) => {
        return schema.comments.all();
      });
    },
  });

  return server;
}
