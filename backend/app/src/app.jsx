const path = require("path");
const express = require("express");

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

const { apolloFetch } = require("./public/components/common.jsx");

app.use("/", function(req, res) {
  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={req.url} context={{}}>
        <Routes />
      </StaticRouter>
    </StyleSheetManager>
  );

  const styles = sheet.getStyleElement();

  res.send(
    renderToString(<Base styles={styles} dangerouslySetInnerHTML={html} />)
  );
});

module.exports = app;
