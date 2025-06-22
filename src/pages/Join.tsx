import { html } from "hono/html";
import { Layout } from "./Layout";

export const Join = () => {
  return (
    <Layout>
      <div id="joins"></div>
      {html`
        <script>
          const ws = new WebSocket("ws://localhost:3000/ws");
          const $joins = document.getElementById("joins");
          ws.onmessage = (event) => {
            $joins.textContent = event.data;
          };
        </script>
      `}
    </Layout>
  );
};
