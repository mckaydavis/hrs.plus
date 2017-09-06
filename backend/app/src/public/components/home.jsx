const React = require("react");
const styled = require("styled-components").default;

class Home extends React.Component {
  render() {
    const Test = styled.div`font-size: 12px;`;
    return (
      <div>
        <Test>
          <p>Hmm</p>
        </Test>
        <h1>Home</h1>
      </div>
    );
  }
}

module.exports = Home;
