const React = require("react");
const { apolloFetch, OuterContainer } = require("./common.jsx");
const ListItem = require("./listitem.jsx");

class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      title: null
    };
  }

  componentDidMount() {
    const query = `
      {
        titles(id: ${this.props.id}) {
          id
          name
          chapters {
            id
            name
          } 
        }
      }
    `;
    apolloFetch({ query }).then(res =>
      this.setState({ title: res.data.titles.shift() })
    );
  }

  render() {
    if (!this.state.title) return <div />;

    const { name, chapters } = this.state.title;

    return (
      <OuterContainer>
        <h1>{name}</h1>
        {chapters.map(chapter => {
          return (
            <ListItem title={chapter.name} link={`/chapter/${chapter.id}`} />
          );
        })}
      </OuterContainer>
    );
  }
}

module.exports = Title;
