const React = require("react");

const App = (module.exports = props => {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="/static/css/build.css" />
      </head>
      <body>
        <header className="header">
          <section className="container">
            <h3 className="header-logo">HRS PLUS</h3>
          </section>
        </header>
        <div id="app">{props.children}</div>
        <script src="/static/js/app.js" />
      </body>
    </html>
  );
});
