const React = require("react");
const ReactRouter = require("react-router");
const { StaticRouter, IndexRoute, Route } = ReactRouter;

const Home = require("./components/home.jsx");

const Routes = (module.exports = () => {
  return (
    <div>
      <Route path="/" render={props => <Home />} />
    </div>
  );
});
