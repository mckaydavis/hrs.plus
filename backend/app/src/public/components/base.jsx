const React = require("react");

const App = (module.exports = props => {
  return (
    <html>
      <head>
        <title>{props.title}</title>
      </head>
      <body>
        <div id="app">{props.children}</div>
        <script src="/static/js/app.js" />
      </body>
    </html>
  );
});
