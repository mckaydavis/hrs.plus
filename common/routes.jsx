const React = require("react");
const ReactRouter = require("react-router");
const { HashRouter, IndexRoute, Route } = ReactRouter;

const Layout = require("./components/layout.jsx");
const Home = require("./components/home.jsx");

module.exports = (
  <HashRouter>
    <Route path="/" component={Layout}>
      <IndexRoute compnoent={Home} />
    </Route>
  </HashRouter>
);
