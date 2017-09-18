const chapters = require('../../data/chapters.json');
const subtitles = require('../../data/subtitles.json');

const typeDefs = `
type Title {
  id: ID!
  name: String!
  chapters(id: ID): [Chapter]
  subtitles(id: ID): [Title]
}
`;

const resolver = {
  chapters(title, args, context) {
    const titleChapters = chapters.filter(
      c => title.chapters.indexOf(c.uuid) > -1
    );
    if (args.id) {
      return titleChapters.filter(c => c.id == args.id);
    }
    return titleChapters;
  },
  subtitles(title, args, context) {
    console.log(title.subtitles.length);
    const titleSubtitles = subtitles.filter(
      st => title.subtitles.indexOf(st.uuid) > -1
    );
    if (args.id) {
      return titleSubtitles.filter(st => st.id == args.id);
    }
    return titleSubtitles;
  },
};

module.exports = {
  typeDefs,
  resolver,
};
