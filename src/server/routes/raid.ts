import { Hono } from "hono";
import { client } from "../../bot/lib/client";
import { deleteChannels, createChannels } from "../../utils/functions";
import { RaidOptions } from "../../types/interfaces";

export const raidRouter = new Hono();

raidRouter.post("/", async (c) => {
  const guildId = c.req.query("guildid");
  if (!guildId) {
    return c.text("Error: guildid is required in the query ?guildid=", 400);
  }

  const guild = await client.guilds.fetch(guildId);
  const body = await c.req.json();

  const config: RaidOptions = {
    name: body.name,
    link: body.link,
    ping: body.ping,
  };

  await deleteChannels(guild);
  await createChannels(guild, config);

  return c.text(`Guild ID: ${guildId}`);
});
