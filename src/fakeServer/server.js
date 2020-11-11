// src/server.js
import { belongsTo, hasMany, createServer, Factory, Model } from "miragejs";
import commentFactory from "./factories/comment.factory";
import postFactory from "./factories/post.factory";
import userFactory from "./factories/user.factory";
import faker from "faker";

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
      }),
    },

    factories: {
      user: Factory.extend({ ...userFactory }),
      post: Factory.extend({ ...postFactory }),
      comment: Factory.extend({ ...commentFactory }),
    },

    seeds(server) {
      server.createList("user", 25).forEach((user) => {
        server
          .createList("post", faker.random.number(12), { user })
          .forEach((post) => {
            server.createList("comment", faker.random.number(8), { post });
          });
      });

      console.log(server.db.dump(), "dump");
    },

    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => {
        return schema.users.all();
      });

      this.get("/posts", (schema) => {
        return schema.posts.all();
      });

      this.get("/comments", (schema) => {
        return schema.comments.all();
      });
    },
  });

  return server;
}
