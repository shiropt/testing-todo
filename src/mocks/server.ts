// src/mocks/server.js
import { setupServer } from "msw/node";
import { factory, primaryKey } from "@mswjs/data";
export const db = factory({
  // Create a "user" model,
  todo: {
    // ...with these properties and value getters.
    id: primaryKey(Number),
    title: String,
    isDone: Boolean,
  },
});
const handlers = [...db.todo.toHandlers("rest")];

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);
server.listen();
