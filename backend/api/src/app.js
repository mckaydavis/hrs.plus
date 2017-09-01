const path = require("path");
const express = require("express");
const reactEngine = require("react-engine");
require("node-jsx").install();

const graphqlApp = require("./graphql/app");

const app = express();
const routes = path.resolve("../..", "common/routes.jsx");

var engine = reactEngine.server.create({
  routes: require(routes),
  routesFilesPath: routes
});

app.use("/graphql", graphqlApp);

app.engine(".jsx", engine);
app.set("view engine", "jsx");
app.set("view", reactEngine.expressView);

app.get("/", function(req, res) {
  res.render(res.url, {
    title: "HRS PLUS",
    name: "Index"
  });
});

module.exports = app;
