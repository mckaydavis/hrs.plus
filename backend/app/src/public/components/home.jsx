const React = require("react");
const styled = require("styled-components").default;
const { Input, Label, Button } = require("rebass");

class Home extends React.Component {
  render() {
    const SearchInput = styled(Input)`
      border: 1px solid var(--silver);
      color: var(--black);
    `;

    return (
      <div>
        <div className="search">
          <Label>Search</Label>
          <SearchInput />
          <Button children="Search HRS+" />
        </div>
      </div>
    );
  }
}

module.exports = Home;
