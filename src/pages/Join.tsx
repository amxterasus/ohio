import { html } from 'hono/html';
import { Layout } from './Layout';

export const Join = () => {
  return (
    <Layout>
      <h1>Entradas a Servidores</h1>
      <p>Cuando el bot se una a un servidor se notificara por aqui!</p>
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
