const path = require("path");
const express = require("express");
const reactEngine = require("react-engine");

const React = require("react");
const { StaticRouter, Route } = require("react-router");

const app = express();
const routesFile = path.resolve(__dirname, "./public/routes.jsx");
const Routes = require(routesFile);

const Base = require(path.resolve(__dirname, "./public/components/base.jsx"));
const { ServerStyleSheet, StyleSheetManager } = require("styled-components");
const { renderToString } = require("react-dom/server");

app.set("view engine", "jsx");

app.use("/static", express.static(path.join(__dirname, "public")));

const sheet = new ServerStyleSheet();

app.use("/", function(req, res) {
  res.send(
    renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <Base>
          <StaticRouter location={req.url} context={{}}>
            <Routes />
          </StaticRouter>
        </Base>
      </StyleSheetManager>
    )
  );
});

module.exports = app;
