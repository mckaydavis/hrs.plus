const path = require("path");
const express = require("express");
const reactEngine = require("react-engine");

const graphqlApp = require("./graphql/app");
const React = require("react");
const { StaticRouter, Route } = require("react-router");

const app = express();
const routesFile = path.resolve(__dirname, "./public/routes.jsx");
const Routes = require(routesFile);

const App = require(path.resolve(__dirname, "./public/components/app.jsx"));
const { renderToString } = require("react-dom/server");
app.set("view engine", "jsx");

app.use("/graphql", graphqlApp);
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/", function(req, res) {
  res.send(
    renderToString(
      <App>
        <StaticRouter location={req.url} context={{}}>
          <Routes />
        </StaticRouter>
      </App>
    )
  );
});

module.exports = app;
