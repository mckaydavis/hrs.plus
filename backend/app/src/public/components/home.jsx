const React = require("react");
const styled = require("styled-components").default;
const { Flex, Box } = require("grid-styled");
const { Label } = require("rebass");
const ListItem = require("./listitem.jsx");
const { createApolloFetch } = require("apollo-fetch");

const OuterContainer = styled(Box)`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
`;

const { Input } = require("rebass");

const StyledInput = styled(Input)`
  border: 1px solid var(--silver);
  padding: 10px;
`;

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      divisions: []
    };
  }
  componentDidMount() {
    const apolloFetch = createApolloFetch({
      uri: "https://api-hxisxfilmx.now.sh/graphql"
    });
    const query = `
      query Divisions {
        divisions {
          id,
          name
        }
      }`;

    apolloFetch({ query })
      .then(res => {
        const { divisions } = res.data;
        this.setState({ divisions });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <main>
        <OuterContainer>
          <Label style={{ marginTop: "1rem" }}>Search</Label>
          <StyledInput placeholder="Search for issues" />
          <div className="list">
            {this.state.divisions.map(division => {
              return (
                <ListItem
                  title={division.name}
                  link={`/division/${division.id}`}
                />
              );
            })}
          </div>
        </OuterContainer>
      </main>
    );
  }
}

module.exports = Home;
