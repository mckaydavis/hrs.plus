const React = require("react");
const ReactRouter = require("react-router");
const { StaticRouter, IndexRoute, Route } = ReactRouter;

const { apolloFetch } = require("./components/common.jsx");

const Home = require("./components/home.jsx");
const Division = require("./components/division.jsx");
const Title = require("./components/title.jsx");
const Chapter = require("./components/chapter.jsx");

const { Flex, Box } = require("rebass");

class Routes extends React.Component {
  constructor() {
    super();
    this.state = {
      divisions: []
    };
  }

  componentDidMount() {
    const query = `{
      divisions {
        id
        name
        titles {
          id
          name
          chapters {
            id
            name
          }
        }
      }
    }`;
    apolloFetch({ query }).then(res => {
      this.setState({ divisions: res.data.divisions });
    });
  }

  render() {
    let DivisionsList = [];
    if (this.state.divisions) {
      DivisionsList = (
        <ul>
          {this.state.divisions.map(division => (
            <li>
              <a href={`/division/${division.id}`}>{division.name}</a>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <Flex>
        <Box w={1 / 3} ph={2} className="sideBar">
          <h3>sidebar</h3>
          {DivisionsList}
        </Box>
        <Box w={2 / 3} className="route">
          <Route
            path="/division/:id"
            render={props => {
              return <Division id={props.match.params.id} />;
            }}
          />
          <Route
            path="/chapter/:id"
            render={props => {
              return <Chapter id={props.match.params.id} />;
            }}
          />

          <Route
            path="/title/:id"
            render={props => {
              return <Title id={props.match.params.id} />;
            }}
          />
          <Route exact path="/" render={props => <Home />} />
        </Box>
      </Flex>
    );
  }
}

module.exports = Routes;
