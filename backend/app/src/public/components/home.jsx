const React = require("react");
const styled = require("styled-components").default;
const { Flex, Box } = require("grid-styled");
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
          <h1>Welcome to HRS Plus!</h1>
          <StyledInput placeholder="Search for issues" />
          <Flex>
            <Box w={1 / 3}>
              <h3>Interested in land use?</h3>
              <ul>
                <li>
                  <a href="">One</a>
                </li>
                <li>
                  <a href="">Two</a>
                </li>
                <li>
                  <a href="">Three</a>
                </li>
              </ul>
            </Box>
            <Box w={1 / 3}>
              <h3>Interested in land use?</h3>
              <ul>
                <li>
                  <a href="">One</a>
                </li>
                <li>
                  <a href="">Two</a>
                </li>
                <li>
                  <a href="">Three</a>
                </li>
              </ul>
            </Box>
            <Box w={1 / 3}>
              <h3>Interested in land use?</h3>
              <ul>
                <li>
                  <a href="">One</a>
                </li>
                <li>
                  <a href="">Two</a>
                </li>
                <li>
                  <a href="">Three</a>
                </li>
              </ul>
            </Box>
          </Flex>
        </OuterContainer>
      </main>
    );
  }
}

module.exports = Home;
