import { Hono } from "hono";
import { createBunWebSocket } from "hono/bun";
import { client } from "./client";
import { discordRouter } from "./routes/discord.js";
import { guildRouter } from "./routes/guilds.js";
import { raidRouter } from "./routes/raid.js";
import { cors } from "hono/cors";

const { upgradeWebSocket, websocket } = createBunWebSocket();

const app = new Hono();

app.use(
  "*",
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(",") || ["http://localhost:4321"],
    credentials: true,
    maxAge: 86400,
  })
);

app.get(
  "/ws",
  upgradeWebSocket(() => {
    return {
      onOpen(_event, ws) {
        client.on("guildCreate", (guild) => {
          console.log(guild);
          ws.send(`I have joined ${guild.name} guild.`);
        });
      },
      onClose() {},
    };
  })
);

app.route("/raid", raidRouter);

app.route("/guilds", guildRouter);

app.route("/login/discord", discordRouter);

export default {
  fetch: app.fetch,
  websocket,
};
