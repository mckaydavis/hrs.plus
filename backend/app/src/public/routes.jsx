const React = require("react");
const ReactRouter = require("react-router");
const { StaticRouter, IndexRoute, Route } = ReactRouter;

const { apolloFetch } = require("./components/common.jsx");

const Home = require("./components/home.jsx");
const Division = require("./components/division.jsx");
const Title = require("./components/title.jsx");
const Chapter = require("./components/chapter.jsx");

const { Flex, Box } = require("rebass");
const styled = require("styled-components").default;
const classnames = require("classnames");

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
    const NestedList = styled.ul`
      transition: max-height 1.2s ease-in-out;
      max-height: 0;
      overflow: hidden;

      ${props => props.active && `max-height: 99999px;`};
    `;

    let DivisionsList = [];
    if (this.state.divisions) {
      DivisionsList = (
        <Route
          children={props => {
            const { location, match } = props;
            return (
              <ul>
                {this.state.divisions.map(division => (
                  <li key={division.id}>
                    <a href={`/division/${division.id}`}>{division.name}</a>
                    <NestedList
                      active={location.pathname.match(/title|section/)}
                    >
                      {division.titles.map(title => {
                        return <li key={title.id}>{title.name} </li>;
                      })}
                    </NestedList>
                  </li>
                ))}
              </ul>
            );
          }}
        />
      );
    }

    return (
      <Flex>
        <Box w={1 / 3} px={2} className="sideBar">
          <h3>Sidebar</h3>
          {DivisionsList}
        </Box>
        <Box w={2 / 3} className="route">
          <Route
            path="/division/:id"
            render={props => {
              if (this.state.divisions.length == 0) return <div />;
              const division = this.state.divisions.find(
                ({ id }) => id == props.match.params.id
              );
              return <Division division={division} />;
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
