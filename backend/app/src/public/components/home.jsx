const React = require("react");
const styled = require("styled-components").default;
const { Flex, Box } = require("grid-styled");
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
  render() {
    return (
      <main>
        <OuterContainer>
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
