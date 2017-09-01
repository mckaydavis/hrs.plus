const React = require("react");

class Home extends React.Component {
  render() {
    return (
      <html>
        <title>{this.props.title}</title>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = Home;
