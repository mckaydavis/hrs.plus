const React = require("react");
const styled = require("styled-components").default;
const { Flex, Box } = require("grid-styled");
const { Label } = require("rebass");
const ListItem = require("./listitem.jsx");

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
    fetch("http://localhost:8081/graphql", {
      method: "POST",
      body: `
      {
        divisions {
          id
          name
          }
        }`
    })
      .then(res => res.json())
      .then(divisions => this.setState({ divisions }));
  }
  render() {
    return (
      <main>
        <OuterContainer>
          <Label style={{ marginTop: "1rem" }}>Search</Label>
          <StyledInput placeholder="Search for issues" />
          <div className="list">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </OuterContainer>
      </main>
    );
  }
}

module.exports = Home;
