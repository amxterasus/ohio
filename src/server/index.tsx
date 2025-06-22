import { Hono } from "hono";
import { raidRouter } from "./routes/raid";
import { guildRouter } from "./routes/guilds";
import * as fs from "fs/promises";
import * as path from "path";
import { serveStatic } from "hono/bun";
import { createBunWebSocket } from "hono/bun";
import { Join } from "../pages/Join";
import { client } from ".././bot/lib/client";

const { upgradeWebSocket, websocket } = createBunWebSocket();

const app = new Hono();

client.start()

const ws = app.get(
  "/ws",
  upgradeWebSocket((c) => {
    return {
      onOpen(_event, ws) {
        client.on("guildCreate", (guild) => {
          ws.send("hola")
        });
      },
    };
  })
);

app.use("/*", serveStatic({ root: "./src/assets" }));

app.get("/joins", async (c) => {
  return c.html(<Join />);
});

app.get("/raid", async (c) => {
  const filePath = path.resolve("./src/client/index.html");
  const html = await fs.readFile(filePath, "utf-8");
  return c.html(html);
});

app.route("/raid", raidRouter);

app.route("/guilds", guildRouter);

export default {
  fetch: app.fetch,
  websocket,
};
