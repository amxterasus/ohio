import type { FC } from 'hono/jsx';
import { Header } from './components/Header';

export const Layout: FC = (props) => (
  <html lang="en">
    <head>
      <title>Ohio</title>
      <link href="/styles.css" rel="stylesheet" />
    </head>
    <body>
      <Header />
      {props.children}
    </body>
  </html>
);
