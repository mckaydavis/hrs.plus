const React = require("react");
const ReactRouter = require("react-router");
const { StaticRouter, IndexRoute, Route } = ReactRouter;

const Home = require("./components/home.jsx");
const App = require("./components/app.jsx");

const routes = (module.exports = () => {
  return (
    <div>
      <Route exact path="/" render={props => <Home />} />
    </div>
  );
});
