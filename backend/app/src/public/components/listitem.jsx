const React = require("react");
const styled = require("styled-components").default;
const { Arrow } = require("rebass");
const PropTypes = require("prop-types");

class ListItem extends React.Component {
  render() {
    return (
      <div>
        <h1>List Item</h1>
      </div>
    );
  }
}

// ListItem.propTypes = {
//   rule: PropTypes.object
// };

module.exports = ListItem;
