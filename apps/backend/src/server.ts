import { Hono } from "hono";
import { createBunWebSocket } from "hono/bun";
import { client } from "./client";
import { corsMiddleware } from "./middleware/cors";
import { routes } from "./routes";

const app = new Hono();

const { upgradeWebSocket, websocket } = createBunWebSocket();

app.use("*", corsMiddleware);

app.get(
  '/ws',
  upgradeWebSocket(() => {
    return {
      onOpen(_event, ws) {
        client.on('guildCreate', (guild) => {
          console.log(guild);
          ws.send(`I have joined ${guild.name} guild.`);
        });
      },
      onClose() {},
    };
  }),
);

app.route("/", routes);

export default {
  fetch: app.fetch,
  websocket,
};
