import { Hono } from "hono";
import { Layout } from "./Layout";
import type { FC } from "hono/jsx";
import type { Guild } from "discord.js";

export const Guilds: FC<{ guilds: Guild[] }> = (props: { guilds: any[] }) => {
  return (
    <Layout>
      
      <main>
        <section>
          <h1 class="text-4xl md-text-6xl">Welcome to NekoNyan</h1>
          <p class="text-xl md-text-2xl">A place where cats meet code.</p>
          <a href="/docs" class="btn-docs" title="Read the docs">
            Docs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                stroke-width="1.5"
              />
            </svg>
          </a>
        </section>

        <section class="features-container" style="margin-top:3rem;">
          <div class="features-grid">
            <article class="feature-card">
              <h1>Feature 1</h1>
              <p>Descripción corta de la función número uno.</p>
            </article>
            <article class="feature-card">
              <h1>Feature 2</h1>
              <p>Otra característica interesante para destacar.</p>
            </article>
            <article class="feature-card">
              <h1>Feature 3</h1>
              <p>Y una más para completar la lista de ventajas.</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 NekoNyan. All rights reserved.</p>
      </footer>
      {props.guilds.map((g) => (
        <p class="text-red-500">{g.name}</p>
      ))}
    </Layout>
  );
};
