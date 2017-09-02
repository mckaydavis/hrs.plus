const path = require("path");
const express = require("express");
const reactEngine = require("react-engine");

const graphqlApp = require("./graphql/app");
const React = require("react");
const { StaticRouter, Route } = require("react-router");

const app = express();
const routesFile = path.resolve(__dirname, "../public/routes.jsx");
const routes = require(routesFile);

const App = require(path.resolve(__dirname, "../public/components/app.jsx"));
const { renderToString } = require("react-dom/server");

app.use("/graphql", graphqlApp);
app.set("view engine", "jsx");

app.use("/", function(req, res) {
  res.send(
    renderToString(
      <App>
        <StaticRouter location={req.url} context={{}}>
          <div>
            <Route path="/" render={props => <h1>Hi</h1>} />
            <Route path="/foo" render={props => <h1>Foo</h1>} />
          </div>
        </StaticRouter>
      </App>
    )
  );
});

module.exports = app;
