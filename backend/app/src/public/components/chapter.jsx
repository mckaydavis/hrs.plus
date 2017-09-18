const React = require("react");
const { apolloFetch, OuterContainer } = require("./common.jsx");
const ListItem = require("./listitem.jsx");

class Chapter extends React.Component {
  constructor() {
    super();
    this.state = {
      chapter: null
    };
  }

  componentDidMount() {
    const query = `
      {
        chapters(id: ${this.props.id}) {
          id
          name
          sections {
            id
            name
          } 
        }
      }
    `;
    apolloFetch({ query }).then(res =>
      this.setState({ chapter: res.data.chapters.shift() })
    );
  }

  render() {
    if (!this.state.title) return <div />;

    const { name, sections } = this.state.chapter;

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

module.exports = Chapter;
