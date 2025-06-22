import { Header } from "./components/Header";

export const Layout = (props: { children: any }) => (
  <html>
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
