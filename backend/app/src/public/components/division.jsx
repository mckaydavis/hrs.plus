const React = require("react");
const { OuterContainer, apolloFetch } = require("./common.jsx");
const ListItem = require("./listitem.jsx");
const styled = require("styled-components").default;

class DivisionList extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (!this.props.division) return <div />;

    const { name, titles } = this.props.division;

    const Separator = styled.span`
      display: inline-block;
      margin: 0 0.25rem;
    `;

    const BreadCrumb = styled.div`padding: 1rem 0 0;`;

    return (
      <OuterContainer>
        <BreadCrumb>
          <a href="/">Home</a>
          <Separator>&gt;</Separator>
          <span>{name.toLowerCase()}</span>
        </BreadCrumb>
        <h1>{name}</h1>
        {titles.map(leTitle => {
          return (
            <ListItem title={leTitle.name} link={`/title/${leTitle.id}`} />
          );
        })}
      </OuterContainer>
    );
  }
}
module.exports = DivisionList;
