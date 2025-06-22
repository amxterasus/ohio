import { Hono } from "hono";
import { createBunWebSocket, serveStatic } from "hono/bun";
import { client } from "./client";
import { Join } from "./pages/Join";
import { guildRouter } from "./routes/guilds";
import { raidRouter } from "./routes/raid";
import { discordRouter } from "./routes/discord.js";

const { upgradeWebSocket, websocket } = createBunWebSocket();

const app = new Hono();

app.get("/joins", async (c) => {
  return c.html(<Join />);
});

app.get(
  "/ws",
  upgradeWebSocket(() => {
    return {
      onOpen(_event, ws) {
        client.on("guildCreate", (guild) => {
          console.log(guild);
          ws.send(`Me he unido al servidor ${guild.name}`);
        });
      },
      onClose() {},
    };
  })
);

app.use("/*", serveStatic({ root: "./src/assets" }));

app.route("/raid", raidRouter);

app.route("/guilds", guildRouter);

app.route("/login/discord", discordRouter);

export default {
  fetch: app.fetch,
  websocket,
};
