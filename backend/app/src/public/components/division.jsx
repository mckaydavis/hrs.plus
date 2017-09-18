const React = require("react");
const { OuterContainer, apolloFetch } = require("./common.jsx");
const ListItem = require("./listitem.jsx");
const styled = require("styled-components").default;

class DivisionList extends React.Component {
  constructor() {
    super();
    this.state = {
      division: null
    };
  }

  componentDidMount() {
    const query = `
    {
      divisions(id: ${this.props.id}) {
        name,
        titles {
          id
          name
        }
      }
    }
    `;
    apolloFetch({ query }).then(res => {
      this.setState({
        division: res.data.divisions.shift()
      });
    });
  }

  render() {
    if (!this.state.division) return <div />;

    const { name, titles } = this.state.division;

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
          <span>{this.state.division.name.toLowerCase()}</span>
        </BreadCrumb>
        <h1>{name}</h1>
        {this.state.division.titles.map(leTitle => {
          return (
            <ListItem title={leTitle.name} link={`/title/${leTitle.id}`} />
          );
        })}
      </OuterContainer>
    );
  }
}
module.exports = DivisionList;
